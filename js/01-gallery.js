// import { galleryItems } from "./gallery-items.js";
// // Change code below this line
// console.log(galleryItems);

// const currentContainer = document.querySelector(".gallery");
// const cardsGallery = addItemCard(galleryItems);

// currentContainer.insertAdjacentHTML("beforeend", cardsGallery);

// function addItemCard(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//     <div class="gallery__item">
//       <a class="gallery__link" href="img.[data-source="${original}"]">
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>
//     </div>
//     `;
//     })
//     .join("");
// }

// currentContainer.addEventListener("click", onClickCard);

// const instance = basicLightbox.create(`
//   <div class="content">
//         <img
//           src=""
//           alt="full-image"
//         />
//     </div>
//   `);

// function onClickCard(evt) {
//   evt.preventDefault();

//   if (!evt.target.classList.contains("gallery__image")) {
//     return;
//   }

//   let selectedImg = evt.target.dataset.source;
//   const loadImage = instance.element().querySelector("img");
//   loadImage.src = selectedImg;

//   instance.show();
//   window.addEventListener("keydown", onEscKeyPress);
// }

// function onEscKeyPress(event) {
//   if (event.code === "Escape") {
//     onCloseModal();
//   }
// }

// function onCloseModal() {
//   instance.close();
//   window.removeEventListener("keydown", onEscKeyPress);
// }

import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

function createImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
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

const imgMurkup = createImgGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgMurkup);

galleryContainer.addEventListener("click", onGalleryImgClick);

const instance = basicLightbox.create(`<img src=""/>`);

function onGalleryImgClick(evt) {
  evt.preventDefault();

  const isImgSwatchEl = evt.target.classList.contains("gallery__image");
  if (!isImgSwatchEl) {
    return;
  }

  let selectedImage = evt.target.dataset.source;

  const modalImage = instance.element().querySelector("img");
  modalImage.src = selectedImage;
  instance.show();

  galleryContainer.addEventListener("keydown", onEscClick);
}

function onCloseModal() {
  instance.close();
  window.removeEventListener("keydown", onEscClick);
}

function onEscClick(evt) {
  if (evt.code === "Escape") {
    onCloseModal();
  }
}
