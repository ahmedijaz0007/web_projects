const careers = ['Freelancer', 'Software Engineer', 'Full-Stack Developer'];
const vowels = ['a','e','i','o','u','A','E','I','O','U'];

const text = document.querySelector('#Main-text')

let careerIndex = 0;
let charIndex = 0;

//swapText();
updateText();

function swapText(){
    setInterval(() => {
        careerIndex++;
        careerIndex = careerIndex % careers.length;
        text.innerHTML = careers[careerIndex];
    }, 3000)
}


function updateText(){
    text.innerHTML = `<h1>I am ${vowels.includes(careers[careerIndex].slice(0,1)) ? 'an':'a'} ${careers[careerIndex].slice(0,charIndex)}<h1>`;
    charIndex++;
    if(charIndex > careers[careerIndex].length){
        charIndex = 0;
        careerIndex ++;
        careerIndex = careerIndex % careers.length;
    }
    setTimeout(updateText,100)
}