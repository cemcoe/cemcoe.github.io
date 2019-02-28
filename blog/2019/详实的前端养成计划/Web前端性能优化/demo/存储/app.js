if (navigator.serviceWorker) {
    navigator.serviceWorker.register('server.js', { scope: './' })
        .then(function (reg) {
            console.log(reg)
        })
        .catch(function (e) {
            console.log(e)
        })


} else {
    alert('Server is fail')
}