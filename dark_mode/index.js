const body = document.querySelector("body");
const inputEl = document.getElementById("input")

 inputEl.checked = JSON.parse(localStorage.getItem("mode"));
 updateBody();

function updateBody(){
    if(inputEl.checked){
        body.style.backgroundColor = "black";
    }else{
        body.style.backgroundColor = "white";
    }
    updateLocalStorage();
}

inputEl.addEventListener('input',()=>{
    updateBody();
});


function updateLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(inputEl.checked));
}