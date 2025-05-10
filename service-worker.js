const cacheName = 'v1-variety-store';
const assetsToCache = [
  '/',
  '/index.html',
  '/styles/styles.css',
  '/scripts/script.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedRes => {
      return cachedRes || fetch(event.request);
    })
  );
});
