console.log('index')

const openChapterBtn = document.querySelector('.open-chapter')
const body = document.querySelector("body")

const backdrop = document.querySelector("#backdrop")
backdrop.addEventListener('click', () => {
    bookChapters.style.display = "none"
    backdrop.style.display = "none"
    body.style.overflowY = "auto"
})


const bookChapters = document.querySelector('#book-chapters')
openChapterBtn.addEventListener('click', () => {
    console.log('click')
    bookChapters.style.display = "block"
    backdrop.style.display = "block"
    body.style.overflowY = "hidden"
    
})

// const post = document.querySelector(".post")

// 禁用文章滚动条






