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

// Show input success
function showSuccess(input, successMessage) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
  formControl.classList.remove("error");
  const small = formControl.querySelector("small");
  small.innerText = successMessage;
}

function validateForm(username, email, password, password2) {
  const usernameRegex = /^[a-zA-Z0-9]{4,}$/;
  const passwordRegex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;

  if (username.value === "") {
    showError(username, "Username is required");
  } else if (!username.value.match(usernameRegex)) {
    showError(
      username,
      "Username must contain at least 4 characters, a-z, A-Z"
    );
  } else {
    showSuccess(username, "Username is valid");
  }

  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email, "Email is valid");
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else if (!password.value.match(passwordRegex)) {
    showError(
      password,
      "Password must be at least 8 characters containing at least number 0-9, A-Z and one special character"
    );
  } else {
    showSuccess(password, "Password is okay");
  }

  if (password2.value === "") {
    showError(password2, "Matching password is required");
  } else if (password.value !== password2.value) {
    showError(password2, "Password do not match");
  } else {
    showSuccess(password2, "Passwords match!");
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

// Check required fields

form.addEventListener("submit", submitForm);
