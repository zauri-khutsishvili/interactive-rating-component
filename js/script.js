const rate = document.querySelector(".rate");
const thankYou = document.querySelector(".thank-you");
const rateSubmit = document.getElementById("rate-submit");
const rating = document.getElementById("rating");
const points = document.querySelectorAll(".rate__point");

rateSubmit.addEventListener("click", () => {
    thankYou.classList.remove("hidden");
    rate.classList.add("hidden");
})

points.forEach((point) => {
    point.addEventListener("click", () => {
        rating.innerText = point.innerText;
    })
})