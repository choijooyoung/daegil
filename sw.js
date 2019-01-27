self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/daegil/',
        '/daegil/index.html',
        '/daegil/css/style.css',
        '/daegil/css/fontello.css',
        '/daegil/js/index.js',
        '/daegil/d.mp3',
        '/daegil/manifest.json',
        '/daegil/font/fontello.eot',
        '/daegil/font/fontello.svg',
        '/daegil/font/fontello.ttf',
        '/daegil/font/fontello.woff',
        '/daegil/font/fontello.woff2'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/daegil/index.html');
      });
    }
  }));
});
