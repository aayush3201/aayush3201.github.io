var state = {
  aboutImageNumber: 1,
};

var imageTitles = [
  "Where I grew up",
  "Where I study",
  "What I do when I'm not working",
];
//1-landscape, 0-portrait
var imageOrientations = [1, 1, 0];

var changeImage = () => {
  document.querySelector(".about-image-description").textContent =
    imageTitles[state.aboutImageNumber - 1];
  var img_src = "./images/about/about" + state.aboutImageNumber + ".jpg";
  var el = document.querySelector(".about-image");
  el.src = img_src;
  if (
    imageOrientations[state.aboutImageNumber - 1] == 1 &&
    !el.classList.contains("landscape")
  ) {
    el.classList.remove("portrait");
    el.classList.add("landscape");
  }
  if (
    imageOrientations[state.aboutImageNumber - 1] == 0 &&
    !el.classList.contains("portrait")
  ) {
    el.classList.remove("landscape");
    el.classList.add("portrait");
  }
};

document.querySelector(".prev-image").addEventListener("click", () => {
  if (!document.querySelector(".prev-image").classList.contains("invisible")) {
    state.aboutImageNumber--;
    if (state.aboutImageNumber == 0) state.aboutImageNumber = 3;
    changeImage();
  }
});

document.querySelector(".next-image").addEventListener("click", () => {
  if (!document.querySelector(".next-image").classList.contains("invisible")) {
    state.aboutImageNumber++;
    if (state.aboutImageNumber == 4) state.aboutImageNumber = 1;
    changeImage();
  }
});
