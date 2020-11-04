window.onload = function () {
    let portretPhotos = ['./images/evakuatorPortret1.jpg', './images/evakuatorPortret2.jpg', './images/evakuatorPortret3.jpg'];
    let landscapePhotos = ['./images/evakuatorAlbum1.jpg', './images/evakuatorAlbum2.jpg', './images/evakuatorAlbum3.jpg'];
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
