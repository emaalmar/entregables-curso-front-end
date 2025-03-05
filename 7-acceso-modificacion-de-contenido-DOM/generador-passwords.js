const upperCaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCaseLetters = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "1234567890";
const symbols = "$%&-_"

const buttonGeneratePassword = document.getElementById("generate-password");

const passwordLengthInput = document.getElementById("password-length");
const passwordLengthDisplay = document.getElementById("password-length-display");

class GeneratePassword {
    constructor(upperCaseLetters, lowerCaseLetters, numbers, symbols) {
        this.upperCaseLetters = upperCaseLetters;
        this.lowerCaseLetters = lowerCaseLetters;
        this.numbers = numbers;
        this.symbols = symbols;
    }

    getRandomChar(string){
        return string[Math.floor(Math.random()*string.length)];
    }

    generate(){
        const passwordLength = parseInt(document.getElementById("password-length").value);

        const includeUpper = document.getElementById("include-uppercase-letters").checked;
        const includeLower = document.getElementById("include-lowercase-letters").checked;
        const includeNumbers = document.getElementById("include-numbers").checked;
        const includeSymbols = document.getElementById("include-symbols").checked;

        const getPassword = document.getElementById("generated-password");

        let availableChars = "";
        if (includeUpper) availableChars += this.upperCaseLetters;
        if (includeLower) availableChars += this.lowerCaseLetters;
        if (includeNumbers) availableChars += this.numbers;
        if (includeSymbols) availableChars += this.symbols;


        if (!(includeUpper || includeLower || includeNumbers || includeSymbols)) {
            return alert("Necesitas seleccionar al menos una opción");
        }

        let password = "";
        for (let i = 0; i < passwordLength; i++) {
            password += this.getRandomChar(availableChars);
        }

        getPassword.textContent = password
    }

}

buttonGeneratePassword.addEventListener("click", function () {
    const newPassword = new GeneratePassword(upperCaseLetters,lowerCaseLetters,numbers,symbols)
    newPassword.generate();
})

passwordLengthInput.addEventListener("input", function () {
    passwordLengthDisplay.textContent = "Longitud de la contraseña: " + passwordLengthInput.value;
});