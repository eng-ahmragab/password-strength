const pass = document.getElementById("password");
const strengthDisplay = document.getElementById("strengthDisplay");
const strengthBar = document.getElementById("strengthBar");







function checkPassword(password) {
    //console.log(password);
    let strength = 0;
    if (password.length >= 6) { //length
        strength += 1;
    }
    if (password.length >= 10) {
        strength += 1;
    }
    if (password.match(/[0-9]/)) { //numbers
        strength += 1;
    }
    if (password.match(/[A-Z]/)) { //capital chars
        strength += 1;
    }
    if (password.match(/[-+*\/=!$%^&@#_|~`(){}\[\]<>:";'?,.]/)) { //special characters
        strength += 1;
    }

    switch (strength) {
        case 0:
            strengthBar.style.width = "1%";
            strengthBar.style.backgroundColor = "#df0000";
            strengthDisplay.innerText = "";
            break;
        case 1:
            strengthBar.style.width = "20%";
            strengthDisplay.innerText = "very weak";
            strengthDisplay.style.color = "white";
            strengthBar.style.backgroundColor = "#df0000";
            break;
        case 2:
            strengthBar.style.width = "40%";
            strengthDisplay.innerText = "weak";
            strengthDisplay.style.color = "white";
            strengthBar.style.backgroundColor = "#ff8800";
            break;
        case 3:
            strengthBar.style.width = "60%";
            strengthDisplay.innerText = "medium";
            strengthDisplay.style.color = "black";
            strengthBar.style.backgroundColor = "#ffd900";
            break;
        case 4:
            strengthBar.style.width = "80%";
            strengthDisplay.innerText = "strong";
            strengthDisplay.style.color = "white";
            strengthBar.style.backgroundColor = "#0ead00";
            break;
        case 5:
            strengthBar.style.width = "100%";
            strengthDisplay.innerText = "very strong";
            strengthDisplay.style.color = "white";
            strengthBar.style.backgroundColor = "#0ead00";
            break;
    }



}






pass.addEventListener("keyup", (e) => {
    let password = pass.value;
    checkPassword(password);
})