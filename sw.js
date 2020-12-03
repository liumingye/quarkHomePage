importScripts('https://g.alicdn.com/kg/workbox/4.3.1/workbox-sw.js');
// 缓存静态资源
workbox.routing.registerRoute(/([\/|.|\w|\s|-])*\.(?:png|gif|jpg|jpeg|webp|svg|ico|ttf|woff|woff2|eot|otf|js|css)/, new workbox.strategies.CacheFirst({
    cacheName: 'static-resources',
    plugins: [new workbox.expiration.Plugin({
        maxEntries: 500, // 最大保存项目
        maxAgeSeconds: 1 * 24 * 60 * 60, // 缓存 1 天
        purgeOnQuotaError: true
    })]
}));
// 缓存主页
workbox.precaching.precacheAndRoute([{
    "revision": "16069",
    "url": "index.html"
}], {});
