import { useEffect } from "react";
import { useLocation } from "wouter";
import { SITE_URL, buildJsonLd, getRouteSeo } from "./routes";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useRouteSeo() {
  const [location] = useLocation();

  useEffect(() => {
    const route = getRouteSeo(location);
    if (!route) return;

    const canonicalUrl = `${SITE_URL}${route.path}`;
    document.title = route.title;

    upsertMeta("name", "description", route.description);
    upsertCanonical(canonicalUrl);

    upsertMeta("property", "og:title", route.title);
    upsertMeta("property", "og:description", route.description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", route.ogImage);

    upsertMeta("name", "twitter:title", route.title);
    upsertMeta("name", "twitter:description", route.description);
    upsertMeta("name", "twitter:image", route.ogImage);

    let ld = document.head.querySelector<HTMLScriptElement>('script#qs-jsonld');
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "qs-jsonld";
      ld.type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(buildJsonLd(route));
  }, [location]);
}
