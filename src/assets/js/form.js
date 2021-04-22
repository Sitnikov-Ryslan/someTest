const email = document.querySelector('.subscribe__input')
const form = document.querySelector('.subscribe')
const label1 = form.querySelector('#label1')
const label2 = form.querySelector('#label2')
const label3 = form.querySelector('#label3')
const errorMsg = form.querySelector('#error-msg')
const modalResult = document.querySelector('.modal_result')
const good = modalResult.querySelector('#good')
const bad = modalResult.querySelector('#bad')
const body = document.body

let hideLabels = function() {
    label1.classList.add('hide')
    label2.classList.add('hide')
    label3.classList.add('active')
}

let showLabels = function() {
    label1.classList.remove('hide')
    label2.classList.remove('hide')
    label3.classList.remove('active')
}

email.addEventListener('input', function() {
    if (email.value != '' && email.value.length != 0) {
        hideLabels()
    } else {
        showLabels()
    }
})

let checkEmail = function(ev) {
    let lengthTest = email.value != '' && email.value.length >= 6 && email.value.length <= 50
    let spec = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (lengthTest && spec.test(email.value)) {
        ev.preventDefault()

        // Fetch
        // let submitForm = function(form) {
        //     let URL = form.action
        //     let method = form.method
        //     let formData = new FormData()
        
        //     let response = fetch(URL, {
        //         method: method,
        //         body: formData
        //     })
        //         .then(response => {
        //             if (response.ok) {
        //                 response.json()
        //                 modalResult.classList.remove('hidden')
        //                 good.classList.remove('hidden')
        //             }
        //         })
        //         .catch(error => {
        //             console.log(error)
        //             modalResult.classList.remove('hidden')
        //             bad.classList.remove('hidden')
        //         })
        // }

        modalResult.classList.remove('hidden')
        good.classList.remove('hidden')
        body.classList.add('no-scroll')

        let results = document.querySelectorAll('.modal__content_result')
        
        results.forEach((elem) => {
            let hiddenElem = elem.classList.contains('.hidden')

            if (!hiddenElem) {
                let closeResultBtn = elem.querySelector('.modal__close_result')
                let modalParent = elem.closest('.modal_result')

                let stopProp = function(evt) {
                    evt.stopPropagation()
                }
            
                let closeResult = function(evt) {
                    evt.preventDefault()
                    body.classList.remove('no-scroll')
                    modalParent.classList.add('hidden')
                    modalParent.removeEventListener('click', closeResult)
                    elem.removeEventListener('click', stopProp)
                }

                modalParent.addEventListener('click', closeResult)
                closeResultBtn.addEventListener('click', closeResult)
                elem.addEventListener('click', stopProp)
            }
        })

        email.value = ''
        showLabels()
        errorMsg.classList.remove('active')
    } else {
        ev.preventDefault()
        errorMsg.classList.add('active')
    }
    
}

form.addEventListener('submit', (event) => {
    checkEmail(event)
})