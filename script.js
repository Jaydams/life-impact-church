"use strict";

const sliderElements = document.querySelectorAll(".slide-item");
const sliderImages = document.querySelectorAll(".slide-item img");
const hamburgerDivs = document.querySelectorAll(".hamb-div");
const hamburger = document.querySelector(".hamburger");
const mission = document.querySelector(".mission");
const vision = document.querySelector(".vision");

console.log(hamburger, hamburgerDivs);

const maxSlides = sliderElements.length - 1;
let curSlide = 0;

function gotoSlide(slide) {
  sliderElements.forEach((s, i) => {
    s.style.visibility = "hidden";
    sliderElements[slide].style.visibility = "visible";
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
}

function prevSlide() {
  if (curSlide === 0) curSlide = maxSlides;
  else curSlide--;

  gotoSlide(curSlide);
}

function nextSlide() {
  if (curSlide === maxSlides) curSlide = 0;
  else curSlide++;

  gotoSlide(curSlide);
}

function init() {
  nextSlide(0);
  setTimeout(init, 5000);
}

init();

hamburger.addEventListener("mouseover", function () {
  hamburger.classList.toggle("change");
});

function displayMission() {
  mission.classList.toggle("vision-disp");
  vision.classList.toggle("vision-disp");
}

function dispMissionTIme() {
  displayMission();
  setTimeout(dispMissionTIme, 12000);
}

dispMissionTIme();
