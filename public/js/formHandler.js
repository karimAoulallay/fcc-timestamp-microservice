const form = document.querySelector("form");
const formControl = document.querySelector("input");

form.addEventListener("submit", (e) => {
  // prevent form submittion
  e.preventDefault();
  window.location.href = "api/" + formControl.value;
});
