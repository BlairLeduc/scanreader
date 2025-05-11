const CACHE_NAME = 'newspaper-reader-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/css/bootstrap.min.css',
    '/js/bootstrap.bundle.min.js',
    '/js/pdf.min.js',
    '/js/pdf.worker.min.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});