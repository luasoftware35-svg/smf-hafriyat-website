import type { MouseEvent } from "react";

export function getHashFromHref(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  return href.slice(hashIndex + 1) || null;
}

export function getPathFromHref(href: string) {
  const hashIndex = href.indexOf("#");
  return hashIndex === -1 ? href : href.slice(0, hashIndex);
}

export function scrollToHashId(id: string, behavior: ScrollBehavior = "smooth") {
  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ behavior, block: "start" });
  return true;
}

export function scrollToHashHref(href: string, behavior: ScrollBehavior = "smooth") {
  const id = getHashFromHref(href);
  if (!id) return false;

  const scrolled = scrollToHashId(id, behavior);
  if (scrolled) {
    window.history.pushState(null, "", href);
  }

  return scrolled;
}

export function scrollToHashWithRetry(href: string, retries = 12, intervalMs = 100) {
  const id = getHashFromHref(href);
  if (!id) return;

  let attempts = 0;

  const tryScroll = () => {
    if (scrollToHashHref(href)) return;
    attempts += 1;
    if (attempts < retries) {
      window.setTimeout(tryScroll, intervalMs);
    }
  };

  tryScroll();
}

export function handleHashLinkClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  pathname: string,
  onAfterScroll?: () => void,
) {
  const id = getHashFromHref(href);
  if (!id) return;

  const path = getPathFromHref(href);
  if (path !== pathname) return;

  event.preventDefault();
  if (scrollToHashHref(href)) {
    onAfterScroll?.();
  }
}
