/**
 * Helper to get proper asset URLs whether running on root domain,
 * subpath (e.g. GitHub Pages /quietspace/), or local development.
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
