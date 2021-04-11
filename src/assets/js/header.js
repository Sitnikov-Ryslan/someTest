const burger = document.querySelector('.header__burger');
let head = document.querySelector('.header');
let headerLinks = head.querySelectorAll('.header__link');

burger.addEventListener('click', () => {
    head.classList.toggle('active');
    burger.classList.toggle('active');
})

// let activateLink = function(item) {
//     headerLinks.forEach(function(el) {
//         el.classList.remove('active');
//     })
//     item.classList.add('active');
//     console.log(item);
// }

// headerLinks.forEach((elem) => {
//     elem.addEventListener('click', activateLink(elem))
// })