console.log("Witam serdecznie!");

let press = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");

press.addEventListener("click", () => {
  body.classList.toggle("green");

  themeName.innerText = body.classList.contains("green") ? "biały" : "zielony";
}); 