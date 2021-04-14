let darkBtn = document.querySelector('.header__input');
let feat = document.querySelector('.feature');
let pic = document.querySelector('.pictures');
let tabs = document.querySelector('.tabs');
let preview = document.querySelector('.preview');
let modalContents = document.querySelectorAll('.modal__content');

let darkPage = function() {
    if (darkBtn.checked) {
        feat.classList.add('dark');
        pic.classList.add('dark');
        tabs.classList.add('dark');
        preview.classList.add('dark');
        modalContents.forEach((i) => {
            i.classList.add('dark');
        })
    } else {
        feat.classList.remove('dark');
        pic.classList.remove('dark');
        tabs.classList.remove('dark');
        preview.classList.remove('dark');
        modalContents.forEach((i) => {
            i.classList.remove('dark');
        })
    }
}

darkBtn.addEventListener('click', darkPage);
window.addEventListener('load', darkPage);