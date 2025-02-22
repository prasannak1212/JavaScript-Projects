let right = document.querySelector(".right");
let left = document.querySelector(".left");
let slider = document.querySelector(".slider");
let img = document.querySelectorAll(".img");
let bottom = document.querySelector(".bottom");

const imageLength = img.length;
let slideNumber = 1;

// Creating Buttons
for (let i=0; i < imageLength; i++){
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}

// Button styles
const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBG = () => {
    buttons.forEach((button) => {
    button.style.backgroundColor = 'transparent';
})}

const changeColor = () => {
    resetBG();
    buttons[slideNumber-1].style.backgroundColor = "white";
}

// For Arrow Sliding
right.addEventListener("click", ()=>{
    if(slideNumber >= imageLength){
        slideNumber = 0;
    }
    slider.style.transform = `translatex(-${slideNumber * 500}px)`;
    slideNumber++;
    changeColor();
})

left.addEventListener("click", ()=>{
    if(slideNumber == 1){
        slider.style.transform = `translatex(-${(imageLength-1) * 500}px)`;
        slideNumber = imageLength+1;
    }
    slider.style.transform = `translatex(-${(slideNumber-2) * 500}px)`;
    slideNumber--;
    changeColor();
})

// For Button Sliding
buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      resetBG();
      slider.style.transform = `translateX(-${i * 500}px)`;
      slideNumber = i + 1;
      button.style.backgroundColor = "white";
    });
  });




