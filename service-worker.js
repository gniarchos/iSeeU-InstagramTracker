// public/service-worker.js

const CACHE_NAME = "my-app-cache-v5"
const urlsToCache = [
  "/",
  "https://gniarchos.github.io/iSeeU-InstagramTracker/index.html", // The main HTML file
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

  if (url.pathname === "/") {
    event.respondWith(
      fetch(event.request).then((response) => {
        return response.text().then((text) => {
          // Parse the HTML and check for the meta tag
          const parser = new DOMParser()
          const doc = parser.parseFromString(text, "text/html")
          const metaTag = doc.querySelector(
            'meta[name="apple-mobile-web-app-status-bar-style"]'
          )

          // If the meta tag exists and has a different value, update the cache
          if (metaTag && metaTag.content !== "black-translucent") {
            const cache = caches.open(precacheCacheName).then((cache) => {
              return cache.put(event.request, response.clone())
            })

            // Trigger a refresh to update the UI
            clients.claim().then(() => {
              window.location.reload()
            })
          }

          return response
        })
      })
    )
  }
})
