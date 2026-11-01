// Scratch 通知チェッカー用 Service Worker
// スマホのChromeでブラウザ通知を表示し、クリックで通知一覧を開くためのファイルです。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || 'https://scratch.mit.edu/messages/';
  event.waitUntil(self.clients.openWindow(url));
});
