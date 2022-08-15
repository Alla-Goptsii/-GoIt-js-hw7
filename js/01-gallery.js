import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

currentContainer.addEventListener("click", onClickCard);

const instance = basicLightbox.create(`
  <div class="content">
        <img
          src=""
          alt="full-image"
        />
    </div>
  `);

function onClickCard(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  let selectedImg = evt.target.dataset.source;
  const loadImage = instance.element().querySelector("img");
  loadImage.src = selectedImg;

  instance.show();
  window.addEventListener("keydown", onEscKeyPress);
}

function onEscKeyPress(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}

function onCloseModal() {
  instance.close();
  window.removeEventListener("keydown", onEscKeyPress);
}
