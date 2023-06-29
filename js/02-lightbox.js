import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerGalleryItems = document.querySelector('.gallery');

const createGalleryMarkyp = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`,
  )
  .join('');
containerGalleryItems.insertAdjacentHTML('beforeend', createGalleryMarkyp);
containerGalleryItems.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();

  var gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  gallery.open();
}
