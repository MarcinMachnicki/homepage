console.log("Witam serdecznie!");

let press = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");

press.addEventListener("click", () => {
  body.classList.toggle("green");

  if (body.classList.contains("green")) {
    themeName.innerText = "biały";
  } else {
    themeName.innerText = "zielony";
  }
}); 