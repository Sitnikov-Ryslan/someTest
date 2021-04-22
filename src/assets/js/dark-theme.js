const darkBtn = document.querySelector('.header__input')
const feat = document.querySelector('.feature')
const pic = document.querySelector('.pictures')
const tabs = document.querySelector('.tabs')
const preview = document.querySelector('.preview')
const modalContents = document.querySelectorAll('.modal__content')

let darkPage = function() {
    if (darkBtn.checked) {
        feat.classList.add('dark')
        pic.classList.add('dark')
        tabs.classList.add('dark')
        preview.classList.add('dark')
        modalContents.forEach((i) => {
            i.classList.add('dark')
        })
    } else {
        feat.classList.remove('dark')
        pic.classList.remove('dark')
        tabs.classList.remove('dark')
        preview.classList.remove('dark')
        modalContents.forEach((i) => {
            i.classList.remove('dark')
        })
    }
}

darkBtn.addEventListener('click', darkPage)
window.addEventListener('load', darkPage)