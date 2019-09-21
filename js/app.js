const sendBtn = document.getElementById("sendBtn"),
  email = document.getElementById("email"),
  subject = document.getElementById("subject"),
  message = document.getElementById("message");

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", appInit);

  email.addEventListener("blur", validateField);
  subject.addEventListener("blur", validateField);
  message.addEventListener("blur", validateField);
}

function appInit() {
  sendBtn.disabled = true;
}

function validateField() {
  let errors;
  validateLength(this);
}

function validateLength(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.classList.add("error");
  }
}
