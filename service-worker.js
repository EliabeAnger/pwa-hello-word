const PRECACHE = 'precache-v1'

const PRECACHE_URLS = [
    'index.html',
    './', //para index.html
    'app.js',
    'demo.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(PRECACHE)
        .then(cache => cache.addAll(PRECACHE_URLS))
        .then(self.skipWaiting())
    );
  });