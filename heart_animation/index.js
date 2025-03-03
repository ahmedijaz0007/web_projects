const  body =  document.querySelector("body")
body.addEventListener("mousemove",(event)=>{
    const x = event.offsetX;
    const y = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = x +"px";
    spanEl.style.top = y +"px";
    const size = Math.random()*100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";



    body.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    },3000);

})