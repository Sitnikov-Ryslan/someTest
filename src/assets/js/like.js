let likes = document.querySelectorAll('.pictures__like-btn');


likes.forEach(function(elem) {
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        elem.classList.toggle('active');
        let press = elem.classList.contains('active');
        let likeParent = elem.closest('.pictures__like');
        let counter = likeParent.querySelector('.pictures__like-counter')

        let counterEnlarge = function(item) {
            let startSum = Number(counter.textContent);
            let newSum = startSum + 1;
            item.textContent = newSum;
        }

        let counterReduce = function(item) {
            let startSum = Number(counter.textContent);
            let newSum = startSum - 1;
            item.textContent = newSum;
        }

        if (press) {
            counterEnlarge(counter);
        } else {
            counterReduce(counter);
        }
    })
})