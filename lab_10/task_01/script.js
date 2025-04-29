levelsInGame = {
    basic: {
        startingRange: 1,
        endingRange: 10,
    },
    intermediate: {
        startingRange: 50,
        endingRange: 100,
    },
    advance: {
        startingRange: 101,
        endingRange: 500,
    }
}

const resultMsg = document.querySelector("#result");

function isNumInRange(n, level) {
    return n >= level.startingRange && n <= level.endingRange;
}

function cmpNumbers(n, randomNumber) {
    if (n < randomNumber) return -1;
    else if (n > randomNumber) return 1;
    else return 0;
}

function generateRandomNumber(startingRange, endingRange) {
    return Math.floor(Math.random() * (endingRange - startingRange + 1) + startingRange);
}

function isInputValid(selectedLevel, userNumberInput) {
    
    if (!selectedLevel || !userNumberInput.value) {
        alert("Please select a level and enter a number.");
        return false;
    }
    
    const level = levelsInGame[selectedLevel.value];
    
    if (isNumInRange(userNumberInput.value, level) === false) {
        resultMsg.textContent = (
            `Please enter a number in the selected range. 
            ${level.startingRange} - 
            ${level.endingRange}`);
            
            userNumberInput.value = "";
            userNumberInput.focus();
            return false;
        }
        
        return true;
    }
    
    function toggleRadioButtons(boolean) {
        const radioButtons = document.querySelectorAll("input[name='level']");
        radioButtons.forEach((radio) => {
            radio.disabled = boolean;
        });
    }
    
    // Random number will only be generated once per game. 
    // Unless the game is reset or won.
    let isRandomNumberGenerated = false;
    let randomNumber;
    
    document.querySelector("#submit-btn").addEventListener("click", (event) => {
        event.preventDefault();
        
        const selectedLevel = document.querySelector("input[name='level']:checked");
        const userNumberInput = document.querySelector("#num-input");
        const userNumber = parseInt(userNumberInput.value);
        
        if (!isInputValid(selectedLevel, userNumberInput)) {
            return;
        }
        
        const level = levelsInGame[selectedLevel.value];
        
        if (!isRandomNumberGenerated) {
            randomNumber = generateRandomNumber(level.startingRange, level.endingRange);
            console.log(randomNumber);
            
            isRandomNumberGenerated = true;

        // Lock the radio buttons after the first guess
        // to prevent changing the level during the game.
        toggleRadioButtons(true);
    }
    
    const result = cmpNumbers(userNumber, randomNumber);
    resultMsg.textContent = "";

    switch (result) {
        case 1:
            resultMsg.textContent = `Your number is greater.`;
            userNumberInput.focus();
            break;
        case -1:
            resultMsg.textContent = `Your number is lesser.`;
            userNumberInput.focus();
            break;
        case 0:
            resultMsg.textContent = `Hurray! You guessed the number.`;
            resultMsg.style.color = "green";

            // Reset the game after winning
            userNumberInput.value = "";
            userNumberInput.focus();
            isRandomNumberGenerated = false;
            toggleRadioButtons(false);
            break;
    }
});

document.querySelector("#reset-btn").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#num-input").value = "";
    resultMsg.textContent = "";
    isRandomNumberGenerated = false;
    toggleRadioButtons(false);
});