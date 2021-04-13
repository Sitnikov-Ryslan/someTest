let cookieBox = document.querySelector('.cookie');
let cookieBtn = cookieBox.querySelector('.cookie__btn');

let checkCookie = function(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? true : false;
}

let checkIntervalCookie = function() {
    let lastCookie = document.cookie;
    return function() {
        let currentCookie = document.cookie;

        if (currentCookie != lastCookie) {
            cookieBox.classList.remove('hidden');
            console.log(document.cookie);
            // lastCookie = currentCookie;
        } else {
            cookieBox.classList.add('hidden');
            console.log(document.cookie);
        }
    };
};

window.setInterval(checkIntervalCookie('opinion'), 100);

window.addEventListener('load', () => {
    if (checkCookie('opinion')) {
        cookieBox.classList.add('hidden');
    } else {
        cookieBox.classList.remove('hidden');
    }
    // window.setInterval(checkIntervalCookie('opinion'), 100);
})

cookieBtn.addEventListener('click', function() {
    document.cookie = "opinion=agree; max-age=3; path=/; samesite=lax";
    cookieBox.classList.add('hidden');
    console.log(document.cookie);
    window.setInterval(checkIntervalCookie('opinion'), 100);
})