const nextElement = document.querySelector(".next");

const prevElement = document.querySelector(".prev");

const imagesElement = document.querySelectorAll("img");

const imageContainerEl = document.querySelector(".image-container");

let currentImage = 1;

let timeout;

nextElement.addEventListener("click", () => {
  currentImage++;
  clearTimeout(timeout);
  updateImage();
});

prevElement.addEventListener("click", () => {
  currentImage--;
  clearTimeout(timeout);
  updateImage();
});

updateImage();

function updateImage() {
  if (currentImage > imagesElement.length) {
    currentImage = 1;
  } else if (currentImage < 1) {
    currentImage = imagesElement.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImage - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImage++;
    updateImage();
  }, 3000);
}