let userObj = {
  username: "John Doe",
  userImg: "https://psdtowpwork.com/html/graptor/demo/assets/images/team/2.jpg",
};

// add username
let profileTitle = document.getElementsByClassName("profile-title");
for (var i = 0; i < profileTitle.length; i++) {
  profileTitle[i].innerText = userObj.username;
}

// add profile pic
// main
let mainImg = document.createElement("img");
mainImg.src = userObj.userImg;
mainImg.id = "user-img";
mainImg.className = "profile-img-dimentions light-border";
let mainImgDiv = document.getElementById("profile-pic");
mainImgDiv.appendChild(mainImg);

//small
let smallImg = document.createElement("img");
smallImg.src = userObj.userImg;
smallImg.className = "sm-profile-img-dimentions";
let smallImgDiv = document.getElementById("sm-profile-pic");
smallImgDiv.appendChild(smallImg);

// bg color select
let blue = "#44B1F4";
let pink = "pink";
let colors = { blue, pink };

let selectOptions = document.getElementById("select");
selectOptions.onchange = changeBackground;

function changeBackground() {
  const color = this.value;
  document.body.style.background = colors[color];
}

// Themes
let darkTheme = document.getElementById("darkTheme");
darkTheme.addEventListener("change", function () {
  if (this.checked) {
    console.log("Checkbox is checked..");
    // background color
    document.getElementById("profile-card").style.backgroundColor = "#151F2B";

    // font color
    let themeFont = document.getElementsByClassName("theme-font");
    for (var i = 0; i < themeFont.length; i++) {
      themeFont[i].classList.add("white");
      themeFont[i].classList.remove("black");
    }

    // theme name
    document.getElementById("theme-name").innerText = "Dark Theme";

    // verified icons
    let verifiedIcons = document.getElementsByClassName("verified");
    for (var i = 0; i < verifiedIcons.length; i++) {
      verifiedIcons[i].classList.add("white");
      verifiedIcons[i].classList.remove("text-primary");
    }

    // cover color
    document.getElementById("cover").classList.add("bg-light-gray");
    document.getElementById("cover").classList.remove("bg-light-brown");

    // profile pic circles
    let profilePicCircle =
      document.getElementsByClassName("profile-pic-circle");
    for (var i = 0; i < profilePicCircle.length; i++) {
      profilePicCircle[i].classList.add("bg-dark-gray");
      profilePicCircle[i].classList.remove("bg-dark-brown");
    }

    // main profile pic border
    document.getElementById("user-img").classList.add("dark-border");
    document.getElementById("user-img").classList.remove("light-border");

    // edit profile badge
    document.getElementById("edit").classList.add("badge-dark");
    document.getElementById("edit").classList.remove("badge-light");
  } else {
    console.log("Checkbox is unchecked..");
    // background color
    document.getElementById("profile-card").style.backgroundColor = "white";

    // font color
    let themeFont = document.getElementsByClassName("theme-font");
    for (var i = 0; i < themeFont.length; i++) {
      themeFont[i].classList.add("black");
      themeFont[i].classList.remove("white");
    }

    // theme name
    document.getElementById("theme-name").innerText = "Light Theme";

    // verified icons
    let verifiedIcons = document.getElementsByClassName("verified");
    for (var i = 0; i < verifiedIcons.length; i++) {
      verifiedIcons[i].classList.add("text-primary");
      verifiedIcons[i].classList.remove("white");
    }

    // cover color
    document.getElementById("cover").classList.add("bg-light-brown");
    document.getElementById("cover").classList.remove("bg-light-gray");

    // profile pic circles
    let profilePicCircle =
      document.getElementsByClassName("profile-pic-circle");
    for (var i = 0; i < profilePicCircle.length; i++) {
      profilePicCircle[i].classList.add("bg-dark-brown");
      profilePicCircle[i].classList.remove("bg-dark-gray");
    }

    // main profile pic border
    document.getElementById("user-img").classList.add("light-border");
    document.getElementById("user-img").classList.remove("dark-border");

    // edit profile badge
    document.getElementById("edit").classList.add("badge-light");
    document.getElementById("edit").classList.remove("badge-dark");
  }
});
