document.addEventListener("DOMContentLoaded",
function () {
    let slides =
    document.querySelectorAll(".ad-slide");
let index = 0;
function showNextSlide() {
    slides.forEach((slides, i) =>
        {
            slide.style.opacity = i
            === index ? "1" : "0";
        })
        index = (index + 1) %
        slides.length;
 }

setInterval(showNextSlide,3000); //
change ad every 3 seconds
})