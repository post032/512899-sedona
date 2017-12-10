var button = document.querySelector(".button");
var modal = document.querySelector(".modal");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-close");
  arrival.focus();
});
