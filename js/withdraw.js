const money = document.querySelectorAll(".btn");
const input = document.querySelector("input");

for (var i = 0; i < money.length; i++) {
  money[i].addEventListener("click", sibal);

  function sibal() {
    location.href = "withdraw-2.html";
  }
}
