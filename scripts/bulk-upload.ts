import fs from 'fs';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// 1. Initialize Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 2. Initialize Sanity Client
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Needs a write token
  useCdn: false,
});

const sourceDir = path.join(__dirname, '../Buildo-Projects'); // Path where the unzipped folders live

async function uploadProjectToCloudinary(projectFolderName: string, files: string[]) {
  const uploadedUrls = [];
  console.log(`\nUploading images for project: ${projectFolderName}`);
  
  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png|webp|avif)$/i)) continue;
    
    const filePath = path.join(sourceDir, projectFolderName, file);
    
    try {
      // Upload to Cloudinary under a folder named after the project slug
      const result = await cloudinary.uploader.upload(filePath, {
        folder: `buildo-projects/${projectFolderName}`,
        use_filename: true,
        unique_filename: false,
        overwrite: true, // replace if exists
      });
      console.log(`  Uploaded ${file} -> ${result.secure_url}`);
      uploadedUrls.push({
        public_id: result.public_id,
        url: result.secure_url
      });
    } catch (err) {
      console.error(`  Error uploading ${file}:`, err);
    }
  }
  
  return uploadedUrls;
}

async function createSanityDocument(projectFolderName: string, uploadedImages: { public_id: string, url: string }[]) {
  if (uploadedImages.length === 0) return;

  // Assuming first image is cover, rest is gallery
  const coverImage = uploadedImages[0];
  const gallery = uploadedImages.slice(1);

  // Convert folder name "athikulam-bhoomi-pooja" to Title "Athikulam Bhoomi Pooja"
  const title = projectFolderName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const doc = {
    _type: 'project',
    title,
    slug: {
      _type: 'slug',
      current: projectFolderName,
    },
    // We are just storing Cloudinary URLs/IDs instead of Sanity image assets to save Sanity storage
    coverImageId: coverImage.public_id,
    coverImageUrl: coverImage.url,
    gallery: gallery.map(img => ({
      _key: img.public_id, // unique key for array item
      public_id: img.public_id,
      url: img.url,
    })),
    // Placeholders for text data - user will fill these in Sanity Studio
    location: "Madurai",
    category: "Residential",
    plotSize: "TBD",
    builtUpArea: "TBD",
    year: new Date().getFullYear().toString(),
    description: "Description pending...",
    isFeatured: false,
  };

  try {
    const result = await sanityClient.create(doc);
    console.log(`Sanity document created for ${title} with ID: ${result._id}`);
  } catch (err) {
    console.error(`Error creating Sanity document for ${title}:`, err);
  }
}

async function main() {
  if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory not found: ${sourceDir}`);
    console.log("Please create a 'Buildo-Projects' folder at the root of the project and place your project subfolders inside it.");
    return;
  }

  const projectFolders = fs.readdirSync(sourceDir).filter(f => fs.statSync(path.join(sourceDir, f)).isDirectory());
  
  console.log(`Found ${projectFolders.length} projects to process.`);

  for (const folder of projectFolders) {
    const files = fs.readdirSync(path.join(sourceDir, folder));
    const uploadedImages = await uploadProjectToCloudinary(folder, files);
    
    if (uploadedImages.length > 0) {
      await createSanityDocument(folder, uploadedImages);
    } else {
      console.log(`Skipped ${folder} - no images found or uploaded.`);
    }
  }
  
  console.log("\nBulk upload complete!");
}

main().catch(console.error);
