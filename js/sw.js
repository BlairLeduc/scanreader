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

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});