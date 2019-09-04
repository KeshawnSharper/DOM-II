// Your code goes here
let nav = document.querySelectorAll("nav a")
nav[0].addEventListener("mouseover", () => nav[0].style.color = "red" );
nav[0].addEventListener("mouseleave", () => nav[0].style.color = "black" );
nav[1].addEventListener("dblclick", () => nav[1].style.color = "red" );
nav[2].addEventListener("click", () => nav[2].style.color = "red" );
document.addEventListener("scroll", () => nav[3].style.color = "red" );
window.addEventListener("load", () => nav[0].style.color = "red" );
nav[2].addEventListener("focus", () => nav[2].style.color = "red" );
let h1 = document.querySelector('h1')
h1.addEventListener("mouseup", () => h1.style.color = "red" );
window.addEventListener("resize", () => h1.style.color = "blue" );
document.addEventListener("keydown", () => h1.style.color = "yellow" );




