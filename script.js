const nextElement = document.querySelector(".next");
const prevElement = document.querySelector(".prev");

const imgsElement = document.querySelectorAll("img");

// console.log(imgsElement) // NodeList(3) [img, img, img]

const imageContainerElement = document.querySelector(".image-container");

let currentImg = 1;

nextElement.addEventListener("click", () => {
    // console.log("Clicked Next");  // Clicked Next
    currentImg++;
    updateImg();
})

function updateImg() {
    if(currentImg > imgsElement.length) {
        currentImg = 1;
    }
    imageContainerElement.style.transform =  `translateX(-${currentImg - 1 * 500}px)`;
};


prevElement.addEventListener("click", () => {
    // console.log("Clicked Previous"); // Clicked Previous
})