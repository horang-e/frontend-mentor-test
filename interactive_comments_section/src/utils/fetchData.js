let cache = new Map();

export function fetchData(url) {
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(url).then(res => res.json()),
    );
  }
  return cache.get(url);
}
