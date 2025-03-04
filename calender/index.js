
const dateEl = document.querySelector('#date');
const dayEl = document.querySelector('#day-name');
const yearEl = document.querySelector('#year');
const monthEl = document.querySelector('#month-name');


const date = new Date()

const month = date.getMonth()
const currDate = date.getDate()
const year = date.getFullYear()

dayEl.innerText = date.toLocaleDateString('en',{weekday:'long'})
dateEl.innerText = date.toLocaleDateString('en',{day:'2-digit'})
monthEl.innerText = date.toLocaleDateString('en',{month:'long'});
yearEl.innerText = date.toLocaleDateString('en',{year:'numeric'});
