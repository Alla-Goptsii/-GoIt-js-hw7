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
    <div class="gallery__item">
      <a class="gallery__link" href="img.[data-source="${original}"]">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
    `;
    })
    .join("");
}

console.log(addItemCard(galleryItems));

currentContainer.addEventListener("click", onClickCard);

function onClickCard(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const bigCard = evt.target.dataset.source;
  //   evt.target.dataset.src === bigCard;
  console.log(bigCard);
  console.log(evt.target);

  // import * as basicLightbox from "basiclightbox";

  const instance = basicLightbox.create(`
      <div class="modal">
          <p>
              Your first lightbox with just a few lines of code.
              Yes, it's really that simple.
          </p>
      </div>
  `);

  instance.show();
  console.log(instance);
  // evt.target.dataset.src.replace(img[data - source= 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg']);
}
