import { galleryItems } from './gallery-items.js';
// Change code below this line

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

const image = document.querySelector('.gallery__image');
console.log(image);
const dataSource = image.getAttribute("data-source");
console.log(dataSource);

// EVENT LISTENER AND FUNCTION
ref.galleryList.addEventListener("click", handleClick);

function handleClick(e) {
    e.preventDefault();
    const clickTarget = e.target;
    
    if (clickTarget.nodeName !== "IMG") {
        return;
    };

    const selectedImage = basicLightbox.create(`
    <img src="${clickTarget.dataset.source}">
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





