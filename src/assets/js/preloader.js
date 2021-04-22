const preview = document.querySelector('.preview')
const body = document.body

let hidePreview = function() {
    preview.classList.add('hidden')
    body.classList.remove('no-scroll')
}

window.addEventListener('load', () => {
    setTimeout(hidePreview, 500)
})