export async function clearAppCache() {
  if ("caches" in window) {
    try {
      const cacheNames = await caches.keys()
      await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)))
    } catch (e) {
      console.log("Caches clear failed", e)
    }
  }
}
