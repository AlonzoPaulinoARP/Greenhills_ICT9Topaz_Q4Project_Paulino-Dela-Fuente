const validCredentials = [
    { username: "Alden Raver", password: "sigmaraver" }
];

let attempts = 3;
let locked = false;

function log_in() {
    if (locked) {
        alert("Access denied! Button is locked. Please refresh the page.");
        return;
    }

    const num1 = document.getElementById("username").value;
    const num2 = document.getElementById("password").value;

    let isValid = false;
    for (const creds of validCredentials) {
        if (num1 === creds.username && num2 === creds.password) {
            isValid = true;
            break;
        }
    }

    if (isValid) {
        alert("Access granted!");
        attempts = 3;
        window.location.href = "dashboard.html";
    } else {
        attempts--;
        if (attempts > 0) {
            alert("Access denied! Incorrect username or password. " + attempts + " attempts left.");
        } else {
            alert("Access denied! Too many failed attempts.");
            locked = true; 
        }
    }
}