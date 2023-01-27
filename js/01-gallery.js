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
    `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="item.preview" alt="${item.description}/></a></div>"`).join('');
}

ref.galleryList.insertAdjacentHTML("afterbegin", galleryMarkup(galleryItems));

// HTML REFRENCES
const galleryImage = document.querySelector(".gallery__link");
const largeImage = galleryImage.getAttribute("href");
const originalImage = document.querySelector('.gallery__image')


// LIGHTBOX FUNCTIONS
ref.galleryList.addEventListener("click", (handleClick));

const imageSelect = basicLightbox.create(`
    <img width="800" height="600"
    src="${galleryImage}">
`)

const lightboxVisible = imageSelect.visible();

// SHOW LIGHTBOX
function handleClick(e) {
    e.preventDefault();
    if (e.target === originalImage) {
        console.log(handleClick);
        imageSelect.show();
    }
}

// ESC CLOSE LIGTHBOX
ref.galleryList.addEventListener("keydown", (handleEscPress));

function handleEscPress(e) {
    if (e.key === 'Escape') {
        imageSelect.close();
    }
}






