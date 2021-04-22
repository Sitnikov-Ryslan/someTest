const cookieBox = document.querySelector('.cookie')
const cookieBtn = cookieBox.querySelector('.cookie__btn')

let checkCookie = function(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    
    return matches ? true : false
}

let checkIntervalCookie = function() {
    let lastCookie = document.cookie
    
    return function() {
        let currentCookie = document.cookie
        
        if (currentCookie != lastCookie) {
            cookieBox.classList.add('hidden')
        } else {
            cookieBox.classList.remove('hidden')
        }

        if (checkCookie('opinion')) {
            cookieBox.classList.add('hidden')
        } else {
            cookieBox.classList.remove('hidden')
        }
    }
}

window.addEventListener('load', () => {
    window.setInterval(checkIntervalCookie('opinion'), 100)
})

cookieBtn.addEventListener('click', function() {
    document.cookie = "opinion=agree; max-age=8; path=/; samesite=lax"
})