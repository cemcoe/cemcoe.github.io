// 获取可视区的高度
var viewHeight = document.documentElement.clientHeight;

console.log("可视高度"+ viewHeight);

function lazyload () {
    var eles = document.querySelectorAll('img[data-original][lazyload]');
    Array.prototype.forEach.call(eles, function (item, index) {
        var rect;
        if (item.dataset.original === '')
            return ;
        rect = item.getBoundingClientRect();
        // console.log(rect);
        

        if (rect.bottom >= 0 && rect.top < viewHeight) {
            !function () {
                var img = new Image();
                img.src = item.dataset.original;
                // console.log(item.src);
                img.onload = function () {
                    img.src = img.src;
                }
                item.removeAttribute('data-original');
                item.removeAttribute('lazyload');
            } ()
        }

    });
}

lazyload();
// 最开始加载

document.addEventListener('scroll', lazyload);