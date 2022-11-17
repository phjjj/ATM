const money = document.querySelectorAll(".btn");
const input = document.querySelector("input");
const span = document.querySelector("number");

for (var i = 0; i < money.length; i++) {
  money[i].addEventListener("click", sibal);
}
function sibal() {
  location.href = "accounttransfer-3.html";
}
