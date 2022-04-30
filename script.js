var burger = document.querySelector('.burger'),
    burgerIcon = document.querySelector('.burger__icon');

    burgerIcon.addEventListener('click', function () {
        burger.classList.toggle('active')
})