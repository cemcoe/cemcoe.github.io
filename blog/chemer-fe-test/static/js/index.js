console.log('index')

const openChapterBtn = document.querySelector('.open-chapter')


const bookChapters = document.querySelector('#book-chapters')
openChapterBtn.addEventListener('click', () => {
    console.log('click')
    bookChapters.style.display = "block"
})

const post = document.querySelector(".post")
post.addEventListener('click', () => {
    bookChapters.style.display = "none"
})




