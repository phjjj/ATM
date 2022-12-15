const number = document.querySelectorAll(".number");
const input = document.querySelector("input");

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", event);
  function event() {
    if (input.value.toString().length == 13) {
      location.href = "deposit-2.html";
    }
  }
}
