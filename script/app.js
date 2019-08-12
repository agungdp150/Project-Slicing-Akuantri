const testi = document.querySelector(".script-testimonial");
const testiPict = document.querySelectorAll(".script-testimonial img");

//buttons

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//counter
let counter = 1;
const size = testiPict[0].clientWidth;

testi.style.transform = "translatex(" + (-size * counter)+ "px)";

//buttons listeners

nextBtn.addEventListener("click", ()=>{
    if (counter >= testiPict.length -3) return;
    testi.style.transition = "transform 0.5s ease-in-out";
    counter++;
    testi.style.transform = "translatex(" + (-size * counter)+ "px)";
});

prevBtn.addEventListener("click", ()=>{
    if (counter <= 0) return;
    testi.style.transition = "transform 0.5s ease-in-out";
    counter--;
    testi.style.transform = "translatex(" + (-size * counter)+ "px)";
});

gojek1.addEventListener("transitionend", ()=>{
    if (testiPict[counter].id === "lastClone") {
        testi.style.transition = "none";
        counter = testiPict.length -2;
        testi.style.transform = "translatex(" + (-size * counter)+ "px)";
    }
    if (testiPict[counter].id === "firstClone") {
        testi.style.transition = "none";
        counter = testiPict.length - counter;
        testi.style.transform = "translatex(" + (-size * counter)+ "px)";
    }
});