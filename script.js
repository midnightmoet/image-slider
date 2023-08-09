const nextElement = document.querySelector(".next");
const prevElement = document.querySelector(".prev");

const imgsElement = document.querySelectorAll("img");

// console.log(imgsElement) // NodeList(3) [img, img, img]

const imageContainerElement = document.querySelector(".image-container");

let currentImg = 1;
let timeout;

nextElement.addEventListener("click", () => {
    // console.log("Clicked Next");  // Clicked Next
    currentImg++;
    clearTimeout(timeout);
    updateImg();
})

prevElement.addEventListener("click", () => {
    // console.log("Clicked Previous"); // Clicked Previous
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})

updateImg();

function updateImg() {
    if(currentImg > imgsElement.length) {
        currentImg = 1;
    } else if(currentImg < 1) {
        currentImg = imgsElement.length;
    }
    imageContainerElement.style.transform =  `translateX(-${(currentImg - 1 )* 500}px)`;
    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000)
};