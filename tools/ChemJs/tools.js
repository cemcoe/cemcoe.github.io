/* H H H H */

/* 滚动条滚动距离 */
console.log("getScrollOffset()");
/* 可视区窗口状态 */
console.log("getViewportOffset()");


/* HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH */
/* 兼容，求滚动条滚动距离 */
function getScrollOffset() {
    // 标准
    if (window.pageXOffset) {
        return {
            Cx: window.pageXOffset,
            Cy: window.pageYOffset
        }

    } else {
        return {
            Cx: document.body.scrollLeft + document.documentElement.scrollLeft,
            Cy: document.body.scrollTop + document.documentElement.scrollTop

        }

    }
}

/* HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH */
/* 可视区窗口状态 */
function getViewportOffset() {
    // IE9以上
    if (window.innerWidth) {
        return {
            Cw: window.innerWidth,
            Ch: window.innerHeight
        }
    } else {
        // document.compatMode === BackCompat 向后兼容
        // document.compatMode === CSS1Compat 标准模式
        if (document.compatMode === "BackCompat") {
            return {
                Cw: document.body.clientWidth,
                Ch: document.body.clientHeight
            }

        } else {
            return {
                Cw: document.documentElement.clientWidth,
                Ch: document.documentElement.clientHeight
            }

        }


    }

}


