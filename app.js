const title = document.getElementById("title")
const info = document.getElementById("info")
const ad = document.getElementById("ad")
const allAds = document.getElementById("allAds")
const nightshade = document.getElementById("nightshade")
title.addEventListener("mouseover", () => {
    info.style = "opacity: 1"
})
title.addEventListener("mouseout", () => {
    info.style = "opacity: 0"
})
ad.addEventListener("mouseover", () => {
    allAds.style = "color: #fff"
    nightshade.style.filter = "grayscale(70%)"
})
ad.addEventListener("mouseout", () => {
    allAds.style = "color: #000"
    nightshade.style.filter = "grayscale(100%)"
})