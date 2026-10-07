import { publicAsset } from "@/lib/base-path";

export const INTRO_MP4 = publicAsset("media", "intro.mp4");
export const INTRO_POSTER = publicAsset("media", "intro-poster.webp");
export const PORTRAIT_BUST = publicAsset("portrait-bust.webp");
export const OG_IMAGE = publicAsset("og.jpg");
export const RESUME_PDF = publicAsset("resume.pdf");

export function logoPath(filename: string): string {
  return publicAsset("logos", filename.replace(/^\//, ""));
}
