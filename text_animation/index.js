const texts = ['I am a Freelancer', 'I am a Software Engineer', 'I am a Full-Stack Developer'];

const text = document.querySelector('#Main-text')

let index = 0;
setInterval(() => {
    index++;
    index = index % texts.length;
    text.textContent = texts[index];
}, 3000)