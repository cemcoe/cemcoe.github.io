self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('app-v1')
            .then( function (cache) {
                console.log('open cache')
                return cache.addAll([
                    './app.js',
                    
                ])
            })
    )
})

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.reuest).then( function (res) {
            if(res) {
                return res
            } else {
                //通过fetch方法向网络发起请求
                fetch(url).then (function (res) {
                    if (res) {
                        //对于新请求的数据存储到cachestorage中
                        caches
                    } else {
                        alert('404')
                    }

                })
            }
        })
    )
})