const CACHE_NAME = "my-app-cache-v5"
const urlsToCache = [
  "/",
  "https://gniarchos.github.io/iSeeU-InstagramTracker/index.html",
  "https://gniarchos.github.io/iSeeU-InstagramTracker/static/js/main.js",
  "https://gniarchos.github.io/iSeeU-InstagramTracker/static/css/main.css",
  "https://gniarchos.github.io/iSeeU-InstagramTracker/manifest.json",
  "https://gniarchos.github.io/iSeeU-InstagramTracker/service-worker.js",
]

// Install the service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    })
  )
})

// Intercept fetch requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    })
  )
})

// Activate the service worker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

// Handle meta tag updates
let cachedMetaTagContent = ""

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "META_TAG_CONTENT") {
    const newMetaTagContent = event.data.content

    // Check if the meta tag content has changed
    if (newMetaTagContent !== cachedMetaTagContent) {
      cachedMetaTagContent = newMetaTagContent

      // Optionally update cache or trigger cache refresh
      self.skipWaiting() // Forces the waiting service worker to become the active service worker
      // Example: caches.keys().then(keys => keys.forEach(key => caches.delete(key)));
    }
  }
})
