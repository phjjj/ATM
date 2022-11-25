const btn = document.querySelectorAll("button");
const p = document.querySelectorAll("p");
const pre = document.querySelectorAll("pre");
var Age = localStorage.getItem("Age");

if (Age > 54) {
  for (var i = 0; i < btn.length; i++) {
    btn[i].style.fontSize = "52px";
  }
  for (var i = 0; i < p.length; i++) {
    p[i].style.fontSize = "50px";
  }
  for (var i = 0; i < pre.length; i++) {
    pre[i].style.fontSize = "50px";
  }
}
