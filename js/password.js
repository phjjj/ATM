const number = document.querySelectorAll(".number");
const password = document.querySelector("input");

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", sibal);

  function sibal() {
    password.value = "1" + password.value;

    if (password.value.toString().length == 4) {
      location.href = "withdraw.html";
    }
  }
}
