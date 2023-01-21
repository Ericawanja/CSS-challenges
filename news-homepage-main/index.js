const open = document.querySelector(".menuIcon")
const close = document.querySelector(".closeIcon")
const menu = document.querySelector(".mobileNavbar")
open.addEventListener("click", (e)=>{
menu.style.display ="flex"
})
close.addEventListener("click", (e=>{
    menu.style.display ="none"
}))




