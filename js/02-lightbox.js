// import simpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items.js';
// Change code below this line

"use strict";

// HTML REFRENCES
const ref = {
    galleryList: document.querySelector('.gallery'),
};

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

    let showLightbox = new simpleLightbox('.gallery a');
    
        showLightbox.on('show.simplelightbox', function () {
            
        });
    

    // ESC CLOSE LIGTHBOX
    ref.galleryList.addEventListener("keydown", (handleEscPress));

    function handleEscPress(e) {
        if (e.key === 'Escape') {
            
        }
    };

}