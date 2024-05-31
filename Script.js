const imagelist = document.querySelector(".imagelist");
firstImageitem = imagelist.querySelectorAll("imageitem")[0];
arrowIcons = document.querySelectorAll(".slider-wrapper i");


let isDragStart = false, prevPageX, prevScrollLeft;
let firstImageitemwidth = firstImageitem.clientwidth;

 arrowIcons.forEach(icon => {
icon.addEventListener("click" , () => {
  imagelist.scrollLeft += icon.id == "left" ? - firstImageitemwidth : firstImageitemwidth;
});
 });
const dragstart = (e) => {
  isDragStart = true;
  prePageX = e.pageX;
  prevScrollLeft = imagelist.scrollLeft;
}

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  let posotionDiff = e.pageX - prevPageX;
  imagelist.scrollLeft = prevScrollLeft - posotionDiff;
}

const dragstop = () => {
  isDragStart = false;
}
const dragStop = () =>{
isDragStart = false;
}

imagelist.addEventListener("mousedown" , dragstart);
imagelist.addEventListener("mousemove", dragging);
imagelist.addEventListener("mouseup", dragstop);
document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".card-slider");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
});
