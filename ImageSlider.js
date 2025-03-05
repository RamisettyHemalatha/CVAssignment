const images = [
    "https://rukminim2.flixcart.com/image/850/1000/kgsb1jk0-0/poster/n/h/y/medium-twfnp2-beautiful-waterfall-nature-view-large-size-high-original-imafwy37qv2b5g3v.jpeg?q=90&crop=false",
    "https://t3.ftcdn.net/jpg/06/76/33/36/360_F_676333620_Gg6VrihsrlOEIsvO281ny8Pi1V1HLvlO.jpg",
    "https://img.freepik.com/premium-photo/scenic-view-waterfall-forest-autumn_1048944-12827636.jpg?semt=ais_hybrid"
];
let currentIndex = 0;

function updateImage() {
    document.getElementById("slider").src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}
updateImage();