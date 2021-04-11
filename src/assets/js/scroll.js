let scrollBtn = document.querySelector('.pictures__scroll-btn');
let header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let zeroHeight = document.documentElement.clientHeight * 1.5;
    let actualHeight = window.pageYOffset;
    
    if (actualHeight >= zeroHeight) {
        scrollBtn.classList.add('fixed');
        scrollBtn.classList.remove('active');
        header.classList.add('fixed');
    } else {
        scrollBtn.classList.remove('fixed');
        header.classList.remove('fixed');
    }
})

scrollBtn.addEventListener('click', () => {
    scrollBtn.classList.add('active');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})