window.onload = function () {
    let portretPhotos = ['./images/skodaVert1.jpg', './images/polo.jpg', './images/zoe.jpg'];
    let landscapePhotos = ['./images/skoda1.jpg', './images/skoda2.jpg', './images/skoda3.jpg'];
    let slider = document.getElementById('slider');
    let iterator = 0;
    setInterval(() => {
        if (document.documentElement.clientWidth < 550) {
            let image = portretPhotos[iterator];
            slider.style.backgroundImage = `url(${image})`;
        } else {
            let image = landscapePhotos[iterator];
            slider.style.backgroundImage = `url(${image})`;
        }
        ++iterator;
        if (iterator === 3) {
            iterator = 0;
        }
    }, 3000);


}
