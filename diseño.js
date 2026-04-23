document.addEventListener('DOMContentLoaded', function () {
    const redColor = document.querySelector('.red-btn');
    const grayColor = document.querySelector('.gray-btn');
    const cartButton = document.getElementById('cartButton');
    const imageCard = document.querySelector('.image-card');

    redColor.addEventListener('click', function() {
        cartButton.style.backgroundColor = 'red';
        imageCard.style.backgroundImage = 'url("imagenes/red-benz.webp")';
    });

    grayColor.addEventListener('click', function() {
        cartButton.style.backgroundColor = 'gray';
        imageCard.style.backgroundImage = 'url("imagenes/mercedex.jpg")';
    });
});