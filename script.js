window.onload = function () {
    const portretPhotos = ['./images/evakuatorPortret2.jpg','./images/evakVert4.jpg', './images/evakVert7.jpg'];
    const landscapePhotos = ['./images/evakGor3.jpg', './images/evakuatorAlbum2.jpg', './images/evakuatorAlbum3.jpg'];
    const slider = document.getElementById('slider');
    let iterator = 0;
    setInterval(() => {
        if (document.documentElement.clientWidth < 550) {
            const image = portretPhotos[iterator];
            slider.style.backgroundImage = `url(${image})`;
        } else {
            const image = landscapePhotos[iterator];
            slider.style.backgroundImage = `url(${image})`;
        }
        ++iterator;
        if (iterator === 3) {
            iterator = 0;
        }
    }, 4000);
}
