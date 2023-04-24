var email = document.getElementById("form-email");
var password =  document.getElementById("form-password");

var setError = function (element, message) {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

var setSuccess = function(element) {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.remove("error");
    inputControl.classList.add("success");
}

function isValidEmail(email) {
    const re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInputEmail() {
    var emailValue = email.value.trim();
    if(emailValue === "") {
        setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email adress");
    } else {
        setSuccess(email);
    }
}

function validateInputPassword() {
    var passwordValue = password.value.trim();
    if (passwordValue === "") {
        setError(password, "Password is required");
    } else if (passwordValue.length < 8 )  {
        setError(password, "Password must be at least 8 character");
    } else {
        setSuccess(password);
    }
}

email.addEventListener("blur" , validateInputEmail);
password.addEventListener("blur" , validateInputPassword);