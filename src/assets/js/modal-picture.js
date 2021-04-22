const body = document.body
const pictures = document.querySelectorAll('.pictures__link')
const modalPicture = document.querySelector('.modal_picture')
const modalPicContent = document.querySelector('.modal__content_pic')

let showPic = function(elem) {
    elem.addEventListener('click', function(evt) {
    evt.preventDefault()

    body.classList.add('no-scroll')
    modalPicture.classList.remove('hidden')

    let modalClose = modalPicture.querySelector('.modal__close')
    let dataAtr = elem.dataset.src
    let modalImg = modalPicContent.querySelector('img')
    let modalLink = modalPicContent.querySelector('.modal__link')

    modalImg.src = dataAtr
    modalLink.href = dataAtr

    let stopProp = function(evt) {
        evt.stopPropagation()
    }

    let closeModal = function(evt) {
        evt.preventDefault()

        body.classList.remove('no-scroll')
        modalPicture.classList.add('hidden')
        
        modalPicture.removeEventListener('click', closeModal)
        modalPicContent.removeEventListener('click', stopProp)
    }

    modalPicture.addEventListener('click', closeModal)
    modalClose.addEventListener('click', closeModal)
    modalPicContent.addEventListener('click', stopProp)
    })
}

pictures.forEach(showPic)