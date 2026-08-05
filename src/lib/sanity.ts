import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder-project-id";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // if you're using ISR or want real-time updates
});

const builder = imageUrlBuilder(client);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

// Example GROQ queries for when the CMS is populated
export const featuredProjectsQuery = `*[_type == "project" && isFeatured == true] | order(_createdAt desc)[0...4] {
  _id, title, "slug": slug.current, location, plotSize, builtUpArea, category,
  "imageUrl": coverImage.asset->url
}`;

export const allProjectsQuery = `*[_type == "project"] | order(_createdAt desc) {
  _id, title, "slug": slug.current, location, plotSize, builtUpArea, category,
  "imageUrl": coverImage.asset->url
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  title, location, plotSize, builtUpArea, category, year, description,
  "coverImageUrl": coverImage.asset->url,
  "galleryUrls": gallery[].asset->url
}`;
