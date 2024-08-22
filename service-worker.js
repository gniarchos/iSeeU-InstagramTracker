// public/service-worker.js

const CACHE_NAME = "my-app-cache-v4"
const urlsToCache = [
  "/",
  "/index.html", // The main HTML file
  "/static/js/main.js",
  "/static/css/main.css",
  "/manifest.json",
  "/service-worker.js",
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

          // If the meta tag exists, handle it accordingly
          if (metaTag) {
            const cache = caches.open(precacheCacheName).then((cache) => {
              return cache.put(event.request, response.clone())
            })
          }

          return response
        })
      })
    )
  }
})
