// <img src="var"

let profileBtns = document.querySelectorAll(".profile-btn")
let images = document.querySelectorAll(".image")
console.log(images)

function hideAll() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add("hidden")
    }
}

let headShotBtn = document.querySelector(".btn#headshot")
let headShotImg = document.querySelector(".image#headshot")
headShotBtn.addEventListener('click', () => {
    hideAll()
    headShotImg.classList.remove("hidden")
})

let colorBtn = document.querySelector(".btn#color")
let colorImg = document.querySelector(".image#color")
colorBtn.addEventListener('click', () => {
    hideAll()
    colorImg.classList.remove("hidden")
})

let placeBtn = document.querySelector(".btn#place")
let placeImg = document.querySelector(".image#place")
placeBtn.addEventListener('click', () => {
    hideAll()
    placeImg.classList.remove("hidden")
})

let ritualBtn = document.querySelector(".btn#ritual")
let ritualImg = document.querySelector(".image#ritual")
ritualBtn.addEventListener('click', () => {
    hideAll()
    ritualImg.classList.remove("hidden")
})