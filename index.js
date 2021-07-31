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
  el.style.display = "none";
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
  el.src = img_src;
  el.style.display = "block";
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

document.querySelectorAll(".project-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    var el = e.target;
    while (!el.classList.contains("project-item")) el = el.parentNode;
    var directory = el.id;
    var path1 = "./data/" + directory + "/" + directory + "-1.jpg";
    var path2 = "./data/" + directory + "/" + directory + "-2.jpg";
    document.querySelector(".img1").src = path1;
    document.querySelector(".img2").src = path2;
    var title = el.querySelector(".project-title").textContent;
    var tech = el.querySelector(".tech-used").textContent;
    document.querySelector(".tech-used-detail").textContent = tech;
    document.querySelector(".project-detail-title").textContent = title;
    document.querySelector(".project-description-detail").innerHTML =
      getDescription(directory);
    document.querySelector(".ghub-link").href = getGithub(directory);
    var popup = document.querySelector(".popup");
    popup.style.display = "flex";
  });
});

document.querySelector(".back-button").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "none";
});

var getDescription = (id) => {
  if (id == "digidiary")
    return "Digidiary is a personal project that acts like a digital diary without the hassle of turning pages and buying a new one for a new year. Users can not only log their daily thoughts/activities but also make a to-do list and set reminders for events. They can choose from yearly events (eg. birthdays), monthly events (eg. rent date), and one-time events (eg. a concert) and get reminders for them accordingly. As a student, with multiple assignments and exam dates to remember, this project helps a lot!";
  if (id == "chatroom")
    return "ChatRoom is a personal project created using Java sockets and servers. It can be used to set up a server (analogous to a chat room) which will allow user to connect to it (joining the room) and then chat with each other (like Discord but on your command line). This project uses a specially created MessageQueue abstract data type which allows the queueing of messages so that they are not lost before being delivered.";
  if (id == "gamerec")
    return 'Machine Learning Game Recommender was a project for a university course, worked on by a team of 4. It is an Android application that takes in three PS4 game cover art images as input. These images are then recognised as one of over 350 PS4 games in our database. Image recognition (created by me) is done by a combined system of two models - a YOLOv4 model which demarcates the title of the game and a Google Mobilenet model which classifies the title. The resulting predictions are then fed into another ML model which recommends games. This model was trained using user-reviews from websites like Metacritic. The ML computations happen on the backend (using Node.js). Both the predictions and the recommendations are displayed on the frontend (created using Kotlin). Click <a href="https://drive.google.com/file/d/1kjANm73xqBYNhIB9C1ETR2fLFry9JxNN/view?usp=sharing" target="_blank">here</a> for a short video demonstration of our app!';
  if (id == "portfolio")
    return "This webpage is my portfolio as well as a personal project to learn about better layout techniques like Flexbox and CSS Grid. It also uses basic JavaScript control what happens when various components of the the page are clicked.";
  return "Error";
};

var getGithub = (id) => {
  if (id == "digidiary") return "https://github.com/aayush3201/Digidiary";
  if (id == "chatroom") return "https://github.com/aayush3201/ChatRoom";
  if (id == "portfolio")
    return "https://github.com/aayush3201/aayush3201.github.io";
  if (id == "gamerec")
    return "https://github.com/aayush3201/ML_Game_Recommender";
  return "#";
};
