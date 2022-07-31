const body = document.querySelector("body");
const colorBtn = document.querySelector(".btn");
const colors = ["red", "green", "blue", "yellow", "pink", "purple"];

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  let randomNumber = Math.floor(Math.random() * 6);

  body.style.backgroundColor = colors[randomNumber];
}
