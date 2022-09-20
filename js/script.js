console.log("Witam serdecznie!");

let press = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");

press.addEventListener("click", () => {
  body.classList.toggle("change__color");

  themeName.innerText = body.classList.contains("change__color") ? "Normal Mode" : "Thug Mode";
}); 

