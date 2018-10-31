workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

// workbox.skipWaiting()
// workbox.clientsClaim()

// workbox.routing.registerRoute(
//   new RegExp('https://api.mapbox.com/(.*)'),
//   workbox.strategies.cacheFirst({
//     cacheName: 'mapbox',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 30
//       }),
//       new workbox.cacheableResponse.Plugin({
//         statuses: [0, 200]
//       })
//     ]
//   })
// )

// workbox.routing.registerRoute(
//   new RegExp('https://ucarecdn.com/(.*)'),
//   workbox.strategies.cacheFirst({
//     cacheName: 'uploadcare',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 30
//       }),
//       new workbox.cacheableResponse.Plugin({
//         statuses: [0, 200]
//       })
//     ]
//   })
// )

// workbox.routing.registerRoute(
//   new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
//   workbox.strategies.cacheFirst({
//     cacheName: 'google-fonts',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 30,
//       }),
//       new workbox.cacheableResponse.Plugin({
//         statuses: [0, 200]
//       }),
//     ],
//   }),
// )

workbox.googleAnalytics.initialize()
