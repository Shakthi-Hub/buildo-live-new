# Buildo Project Bulk Upload

This script uploads your local project folders to Cloudinary and creates corresponding draft documents in Sanity CMS.

## Prerequisites

1. Set up a free [Cloudinary](https://cloudinary.com/) account.
2. Set up a free [Sanity.io](https://www.sanity.io/) account and create a new project.
3. Add the following to your `.env.local` file at the root of the project:
   ```
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_write_token
   ```
   *(You can create a Sanity token in your project dashboard -> API -> Tokens -> Add New Token (Editor rights))*

## How to use

1. Extract the ZIP from WeTransfer.
2. Create a folder named `Buildo-Projects` at the root of this repository (next to `package.json`).
3. Place your individual project folders inside `Buildo-Projects`. The folder names will be used as the project slugs and titles.
   *Example Structure:*
   ```
   /Buildo-Projects/
     ├── athikulam-bhoomi-pooja/
     │   ├── 1.jpg
     │   ├── 2.jpg
     │   └── ...
     ├── thanjavur-site/
     │   ├── cover.jpg
     │   └── ...
   ```
4. **RECOMMENDATION**: Compress the images using a bulk compressor tool (like Mac's Automator, PowerToys on Windows, or ImageMagick) before running this script to stay within Cloudinary's free 25GB limit.
5. Run the script:
   ```bash
   npx ts-node scripts/bulk-upload.ts
   ```
6. The script will output the progress. Once completed, all your projects will be available in Sanity for you to edit the descriptions and stats!
