const imageHover = document.querySelectorAll('div.mini > img');
const imageMove = document.querySelector('div.pictureShow > div');
const proyectsWrapper = document.querySelector('div.projectsShow > div.wrapper');

imageHover.forEach((image, i) => {
    image.addEventListener('mouseover', () => {
        imageMove.style.left = `${(i +1) * -100}%`;
    });
});

proyectsWrapper.addEventListener('mouseleave', () => {
    imageMove.style.left = 0;
});