const secEl = document.querySelector(".secs");
const minEl = document.querySelector(".mins");
const hourEl = document.querySelector(".hours");
const timePeriodEl = document.querySelector(".time-period");

updateTime();
setInterval(updateTime,100);
function updateTime(){
    const date = new Date()
    let hours = date.getHours() % 12 || 12; // Convert 0 to 12 for AM/PM format
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timePeriod = date.getHours() >= 12 ? "PM" : "AM"; // Determine AM/PM
    if (timePeriod === "AM") {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=1200')";
    } else {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1200')";
    }
    secEl.innerText = seconds.toString().padStart(2, "0"); // Ensure 2-digit format
    minEl.innerText = minutes.toString().padStart(2, "0");
    hourEl.innerText = hours.toString().padStart(2, "0");
    timePeriodEl.innerText = timePeriod;

}