// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });

lightbox.on('show.simplelightbox', function (e) {
    e.preventDefault(); 
});


function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        `
        <a
          class="gallery__item"
          href="${original}"
          rel="noopener noreferrer nofollow"

        >
          <img
            loading="lazy"
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            title="${description}"
          />
        </a>
    `).join('');
}


