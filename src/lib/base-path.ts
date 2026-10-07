const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Site origin + basePath (no trailing slash), e.g. https://karguvel7.github.io/talking-portfolio */
export const siteBaseUrl = `${process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://karguvel7.github.io"}${bp}`;

export function publicAsset(...segments: string[]): string {
  const path = [bp, ...segments].filter(Boolean).join("/");
  return path.startsWith("/") ? path : `/${path}`;
}

/** Prefix a root-relative public asset path with the GitHub Pages basePath. */
export function withBase(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return publicAsset(...normalized.split("/").filter(Boolean));
}
