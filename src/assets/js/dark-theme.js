let darkBtn = document.querySelector('.header__input');
let feat = document.querySelector('.feature');
let pic = document.querySelector('.pictures');
let tabs = document.querySelector('.tabs');
let preview = document.querySelector('.preview');
let modalContents = document.querySelectorAll('.modal__content');
let err = document.querySelector('.error');

darkBtn.addEventListener('click', () => {
    if (darkBtn.checked) {
        feat.classList.add('dark');
        pic.classList.add('dark');
        tabs.classList.add('dark');
        preview.classList.add('dark');
        modalContents.forEach((i) => {
            i.classList.add('dark');
        })
        err.classList.add('dark');
    } else {
        feat.classList.remove('dark');
        pic.classList.remove('dark');
        tabs.classList.remove('dark');
        preview.classList.remove('dark');
        modalContents.forEach((i) => {
            i.classList.remove('dark');
        })
        err.classList.remove('dark');
    }
})