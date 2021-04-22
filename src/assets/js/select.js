const select = document.querySelector('.tabs__select')
const options = document.querySelectorAll('.tabs__option')

let chooseOption = function(item) {
    options.forEach((el) => {
        el.classList.remove('active')
    })

    item.classList.add('active')
}

select.addEventListener('click', () => {
    options.forEach((elem) => {
        elem.classList.toggle('hidden')
        
        elem.addEventListener('click', (evt) => {
            evt.preventDefault()
            chooseOption(elem)
        } )
    })
})