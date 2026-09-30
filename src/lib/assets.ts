import fs from "node:fs";
import path from "node:path";

export type BrandImages = {
  logo: string | null;
  bike: string | null;
  car: string | null;
  skyline: string | null;
};

/** Returns a public URL when the file exists, so missing art never 404s. */
export function publicImage(filename: string): string | null {
  const fullPath = path.join(process.cwd(), "public", "images", filename);
  return fs.existsSync(fullPath) ? `/images/${filename}` : null;
}

export function getBrandImages(): BrandImages {
  return {
    logo: publicImage("logo.png"),
    bike: publicImage("hero-bike.png"),
    car: publicImage("hero-car.png"),
    skyline: publicImage("dubai-skyline.png"),
  };
}
