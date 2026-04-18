// app/(site)/properties/utils/getPropertyImages.ts
import fs from "fs/promises";
import path from "path";

/** Allowed image file extensions (lowercase) */
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

function isImage(filename: string) {
  const ext = path.extname(filename).toLowerCase();
  return IMAGE_EXTS.has(ext);
}

/**
 * Reads /public/properties/[slug] for image files and returns
 * absolute public URLs like /properties/[slug]/filename.jpg
 */
export async function getPropertyImages(slug: string): Promise<string[]> {
  try {
    const dir = path.join(process.cwd(), "public", "properties", slug);
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = entries
      .filter((e) => e.isFile() && isImage(e.name))
      .map((e) => e.name)
      // Natural sort: IMG_2 before IMG_10
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
      .map((name) => `/properties/${slug}/${name}`);

    return files;
  } catch {
    // Folder may not exist yet; return empty
    return [];
  }
}
