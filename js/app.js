const imageHover = document.querySelectorAll('div.mini > img');
const imageMove = document.querySelector('div.pictureShow > div');
const proyectsWrapper = document.querySelector('div.projectsShow > div.wrapper');
const responsiveButton = document.querySelector('nav > ul > div.span');
const nav = document.querySelector('nav');
console.log(nav);

responsiveButton.addEventListener('click', () => {
    nav.classList.toggle('visibility');
});

imageHover.forEach((image, i) => {
    image.addEventListener('mouseover', () => {
        imageMove.style.left = `${(i +1) * -100}%`;
    });
});

proyectsWrapper.addEventListener('mouseleave', () => {
    imageMove.style.left = 0;
});