import { galleryItems } from './gallery-items.js';
// Change code below this line
"use strict";

const ref = {
    galleryList: document.querySelector('.gallery'),
};

const galleryMarkup = galleryItems.map((item) =>
    `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="item.preview" alt="${item.description}/></a></div>"`).join('');

ref.galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);

const galleryImage = document.querySelector(".gallery__link");
console.log(galleryImage);
const largeImage = galleryImage.getAttribute("href");
console.log(largeImage);

ref.galleryList.addEventListener("click", (handleClick));

function handleClick(e) {
    e.preventDefault();
    if (e.target === largeImage) {
        console.log("Responding");
    }
}

import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

instance.show()

