const money = document.querySelectorAll(".btn");
const input = document.querySelector("input");
const span = document.querySelector("number");

for (var i = 0; i < money.length; i++) {
  money[i].addEventListener("click", event);

  const value = money[i].value;
  function event() {
    location.href = "withdraw-2.html";

    window.name = value;
  }
}

input.value = window.name;
