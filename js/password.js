const number = document.querySelectorAll(".number");
const input = document.querySelector("input");

for (var i = 0; i < number.length; i++) {

  number[i].addEventListener("click", sibal);
  function sibal() {
    if (input.value.toString().length == 4) {
      location.href = "withdraw.html";
    }
  }
}

