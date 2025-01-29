const CACHE_NAME = "v1.3.1"
const urlsToCache = [
  "/",
  "/index.html",
  "/static/js/main.[hash].js",
  "/static/css/main.[hash].css",
  // Add other assets you want to cache
]

// Install the service worker and cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  )
})

// Fetch assets from cache or network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  )
})

// Activate the new service worker and clean up old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        })
      )
    )
  )
})

// Skip Waiting for the New Service Worker
self.addEventListener("message", (event) => {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting()
  }
})
