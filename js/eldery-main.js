const video = document.getElementById("video");
const btn = document.querySelectorAll("button");
var Age = localStorage.getItem("Age");

if (Age > 25) {
  fontSizeUp();
}

function fontSizeUp() {
  for (var i = 0; i < btn.length; i++) {
    btn[i].style.fontSize = "100px";
    btn[i].style.width = "600px";
    btn[i].style.height = "400px";
  }
}
