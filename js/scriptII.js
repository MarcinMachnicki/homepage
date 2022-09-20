{
    const welcome = () => {
      console.log("Witam serdecznie!");
    };
const changePhoto = () => {
    const buttonElement = document.querySelector(".js-button");
    const imageElement = document.querySelector(".js-image");
    const photo1 = "https://i.ibb.co/hL205zx/IMG-6525.jpg";
    const photo2 = "https://i.postimg.cc/YSW7g0Hh/IMG-4444.png";

    buttonElement.addEventListener("click", () => {
        imageElement.src = imageElement.src == photo1 ? photo2 : photo1;
    });
};

const init = () => {
    welcome();
    changePhoto();
};

init();
  }