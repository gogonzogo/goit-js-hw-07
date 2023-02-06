"use strict";

// import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items.js';
// Change code below this line

// HTML REFRENCES
const ref = {
    galleryList: document.querySelector('.gallery'),
};

// let throttleScroll = _.throttle(handleScroll, 250);

// window.addEventListener('scroll', handleScroll);

const result = _.add(2, 3);
console.log(result); // 5

window.addEventListener(
    "scroll",
    _.throttle(() => {
        console.log("Scroll handler call every 300ms");
    }, 1000)
);

// MARKUP FUNCTION
function galleryMarkup(array) {
    return array.map((item) =>
        `<a class="gallery__link" href="${item.original}"><img class="gallery__image"src="${item.preview}" alt="${item.description}" width="340"/></a>`).join('');
}

ref.galleryList.insertAdjacentHTML("afterbegin", galleryMarkup(galleryItems));

// EVENT LISTENER AND FUNCTION
ref.galleryList.addEventListener("click", handleClick);

function handleClick(e) {
    e.preventDefault();
    const clickTarget = e.target;
    console.log(clickTarget.nodeName);

    if (clickTarget.nodeName !== "IMG") {
        return;
    };

    let showLightbox = new SimpleLightbox('.gallery a');

        showLightbox.on('show.simplelightbox', function () {
            
        });
        
}

