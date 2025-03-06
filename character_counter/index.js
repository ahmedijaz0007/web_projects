const textArea = document.querySelector(".text-input");
const remainingEl = document.querySelector(".remaining-ch");
const totalEl = document.querySelector(".total-ch");

let totalChs = 0;
const allowedCh = 50;
let remainingChs = 50;

textArea.addEventListener('input', () => {
    console.log(textArea.value); // Logs the updated text
    textArea.value = textArea.value.slice(0,allowedCh);
    remainingChs = allowedCh - textArea.value.length;
    totalChs = textArea.value.length;
    remainingEl.innerText = remainingChs;
    totalEl.innerText = totalChs;
})