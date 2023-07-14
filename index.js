let element = document.getElementById("intro");
var index = 0;
let introTextIndex = element.innerHTML;
element.innerHTML = "";
let numberOfStars = (screen.availWidth * screen.availHeight) / 6000;
makeDivPerfectDiagonal();
setFallingStarsDelay();
displayText(() => {
    document.getElementById("cursor").classList.add("d-none");
    document.getElementById("card-footer").classList.remove("hide");
  });
addStars(numberOfStars);

async function displayText(callback) {
  if (index < introTextIndex.length) {
    if (introTextIndex.charAt(index) === "<") {
      var endIndex = introTextIndex.indexOf(">", index);
      element.innerHTML += introTextIndex.substring(index, endIndex + 1);
      index = endIndex + 1;
    } else {
      element.innerHTML += introTextIndex.charAt(index);
      index++;
    }
    setTimeout(displayText, 40, callback); // Adjust the delay between each letter (in milliseconds)
  } else {
    callback();
  }
}

async function addStars(starsCount) {
  let stars = document.getElementById("stars");
  for (let i = 0; i < starsCount; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.classList.add("position-absolute");
    star.style.bottom = Math.random() * 100 + "vh";
    star.style.right = Math.random() * 100 + "vw";

    stars.appendChild(star);
  }
}
function makeDivPerfectDiagonal() {
  var div = document.getElementById("falling-stars");
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;

  var diagonalLength = Math.sqrt(
    Math.pow(screenWidth, 2) + Math.pow(screenHeight, 2)
  );
  var diagonalAngle = Math.atan(screenHeight / screenWidth) * (180 / Math.PI);

  div.style.width = diagonalLength + "px";
  div.style.transform = "rotate(" + diagonalAngle + "deg) ";
}
function setFallingStarsDelay() {
  let fallingStars = document.getElementsByClassName("falling-star");
  [...fallingStars].forEach((element, index) => {
    console.log(Math.random() * 10 + "s");
    element.style.animationDelay = Math.random() * 10 + "s";
  });
}