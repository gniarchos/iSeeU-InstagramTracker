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
  self.skipWaiting() // Forces the new worker to activate immediately
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
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
              console.log(`Deleting old cache: ${cacheName}`)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        return clients.claim()
      })
      .catch((err) => {
        console.error("Failed to clean up old caches:", err)
      })
  )
})
