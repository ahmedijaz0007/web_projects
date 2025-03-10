const testimonials = [
    {
        name: "Ahmed Ijaz",
        photoUrl: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "We don’t need to spend as much time in meetings now that we use apple."
    },
    {
        name: "Ali Murtaza",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I love apple! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come."
    },
    {
        name: "Hamza Imran",
        photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "apple is the ultimate time saver for small business owners like me."
    }
]

const testimonialsContainer = document.querySelector(".testimonials-container");
const imageEl = document.querySelector(".image")
const textEl = document.querySelector(".text")
const nameEl = document.querySelector(".username")

//updateTestimonial();
let currIndex = 0;

// function updateTestimonial() {
//     setInterval(() => {
//         currIndex++;
//         currIndex = currIndex % testimonials.length;
//         imageEl.src = testimonials[currIndex].photoUrl;
//         textEl.innerText = testimonials[currIndex].text;
//         nameEl.innerText = testimonials[currIndex].name;
//     }, 3000)
// }



function changeTestimonial() {
    // Remove 'show' class to fade out
    testimonialsContainer.classList.remove("show");

    // Wait for fade out transition (500ms) before changing content
    setTimeout(() => {

        // Move to the next testimonial (looping)
        currIndex = (currIndex+1) % testimonials.length;

        imageEl.src = testimonials[currIndex].photoUrl;
        textEl.innerText = testimonials[currIndex].text;
        nameEl.innerText = testimonials[currIndex].name;
        
        // Add 'show' class to fade in the new content
        testimonialsContainer.classList.add("show");

    }, 500); // Delay must match the transition time in CSS
}

// Start changing testimonials every 3 seconds
setInterval(changeTestimonial, 3000);

// Show the first testimonial on page load
setTimeout(() => {
    testimonialsContainer.classList.add("show");
}, 100);