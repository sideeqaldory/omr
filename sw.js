/* © Prof.Dr. Sedeeq Mustafa Aldory — Dr.Sedeeq (OMR). All rights reserved. جميع الحقوق محفوظة. يُمنع النسخ أو التعديل أو إعادة الإنتاج أو التوزيع دون إذن خطي من المالك. */
const CACHE = 'drsedeeq-omr-dae064e3de4a', PRE = ["./","./css/app.css","./fonts/noto-kufi-arabic-arabic-400-normal.woff2","./fonts/noto-kufi-arabic-arabic-700-normal.woff2","./fonts/noto-kufi-arabic-latin-400-normal.woff2","./fonts/noto-kufi-arabic-latin-700-normal.woff2","./img/icon-180.png","./img/icon-192.png","./img/icon-512.png","./img/logo-h.png","./index.html","./js/app.js","./js/camera.js","./js/cap.js","./js/config.js","./js/db.js","./js/export.js","./js/grading.js","./js/layout.js","./js/lib/jspdf.umd.min.js","./js/lib/xlsx.full.min.js","./js/license.js","./js/omr.js","./js/sheet.js","./js/speech.js","./js/word.js","./manifest.webmanifest","./js/lib/docx.min.js"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request).then(res => {
    if (res.ok && new URL(e.request.url).origin === location.origin) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); }
    return res;
  }).catch(() => caches.match('./index.html'))));
});
