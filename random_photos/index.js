
const imageContainer = document.querySelector(".image-container");

const loadMoreBtn = document.querySelector(".btn");

loadMoreBtn.addEventListener("click",()=>{
    const random =Math.floor(Math.random()*10);
    const image =  document.createElement("img");
    image.src = `https://picsum.photos/300/300?random=${random}`;
    imageContainer.appendChild(image);
})
