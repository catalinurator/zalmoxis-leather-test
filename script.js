function toggleMenu(){
document.getElementById("sidebar").classList.toggle("open");
document.getElementById("overlay").classList.toggle("active");
}
function revealOnScroll(){
const elements = document.querySelectorAll(".card, section, .header");

elements.forEach(el=>{
const top = el.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if(top < windowHeight - 100){
el.classList.add("show");
}
});
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
