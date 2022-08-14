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

// console.log(addItemCard(galleryItems));

currentContainer.addEventListener("click", onClickCard);

function onClickCard(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  let selectedImg = evt.target.dataset.source;
  console.log(selectedImg);
  console.log(evt.target);

  const instance = basicLightbox.create(`
  <div class="modal">
        <img src="${selectedImg}"/>
    </div>
  `);

  instance.show();
  const lightboxVisible = basicLightbox.visible();
  console.log(basicLightbox.visible());

  currentContainer.addEventListener("keydown", onEscKeyPress);
  // console.log(instance);

  function onEscKeyPress(event) {
    console.log(event);
    const isEscape = event.code === "Escape";
    if (!lightboxVisible) {
      console.log(event.code);
      return;
    }
    if (isEscape) {
      instance.close();
      currentContainer.removeEventListener("keydown", onEscKeyPress);
    }
  }
}
