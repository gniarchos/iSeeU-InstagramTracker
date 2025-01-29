const CACHE_NAME = "v1.3.4"
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
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches
//       .match(event.request)
//       .then((response) => response || fetch(event.request))
//   )
// })
// Fetch assets from cache or network (with a network-first strategy for HTML files)
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    // Handle HTML updates (network-first strategy)
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Save the latest HTML file in the cache
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone())
            return response
          })
        })
        .catch(() => caches.match(event.request)) // Fallback to the cached HTML if offline
    )
  } else {
    // Default cache-first strategy for other assets
    event.respondWith(
      caches
        .match(event.request)
        .then((response) => response || fetch(event.request))
    )
  }
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
