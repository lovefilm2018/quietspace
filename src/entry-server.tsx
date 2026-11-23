import { renderToString } from "react-dom/server";
import App from "./App";

export { SEO_ROUTES, SITE_URL, buildHeadTagsHtml } from "./seo/routes";

export function render(url: string): string {
  return renderToString(<App ssrPath={url} />);
}
