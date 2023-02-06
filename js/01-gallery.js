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
        `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image"
        src="${item.preview}" 
        data-source="${item.original}" 
        alt="${item.description}" width="340"/></a></div>`).join('');
}

ref.galleryList.insertAdjacentHTML("afterbegin", galleryMarkup(galleryItems));

// EVENT LISTENER AND FUNCTION
ref.galleryList.addEventListener("click", handleClick);

function handleClick(e) {
    e.preventDefault();
    const clickTarget = e.target;
    
    if (clickTarget.nodeName !== "IMG") {
        return;
    };

    const selectedImage = basicLightbox.create(`
    <img width= 650" height="450"
    src="${clickTarget.dataset.source}">
`);
    selectedImage.show();

    // ESC CLOSE LIGTHBOX
    ref.galleryList.addEventListener("keydown", (handleEscPress));

    function handleEscPress(e) {
        if (e.key === 'Escape') {
            selectedImage.close();
        }
    };

}





