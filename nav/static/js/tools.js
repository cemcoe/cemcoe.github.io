// 滚动条
// x 竖着滚动距离
// y 横着滚动距离
console.log('tools 正确引入');
function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}
// 可视区大小
