const money = document.querySelectorAll(".btn");
const input = document.querySelector("input");
const span = document.querySelector("number");

for (var i = 0; i < money.length; i++) {
  money[i].addEventListener("click", sibal);

  const value = money[i].value;
  function sibal() {
    location.href = "withdraw-2.html";
    console.log(value);
    window.name = value;
  }
}

input.value = window.name;
