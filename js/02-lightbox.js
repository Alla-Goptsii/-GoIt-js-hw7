import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const currentContainer = document.querySelector(".gallery");
const cardsGallery = addItemCard(galleryItems);

currentContainer.insertAdjacentHTML("beforeend", cardsGallery);

function addItemCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li>
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>
    `;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionsDelay: 250,
});
