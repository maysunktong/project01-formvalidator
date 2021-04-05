const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input errorMessage
function showError(input, errorMessage) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  formControl.classList.remove("success");
  const small = formControl.querySelector("small");
  small.innerText = errorMessage;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
  formControl.classList.remove("error");
}

function validateForm(username, email, password, password2) {
  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "Matching password is required");
  } else {
    showSuccess(password2);
  }
}

// Check email is valid
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Event listeners
function submitForm(event) {
  event.preventDefault();

  console.log("Form submitted", event.target.elements);

  const usernameInput = event.target.elements.username;
  const emailInput = event.target.elements.email;
  const passwordInput = event.target.elements.password;
  const password2Input = event.target.elements.password2;

  validateForm(usernameInput, emailInput, passwordInput, password2Input);
}

form.addEventListener("submit", submitForm);
