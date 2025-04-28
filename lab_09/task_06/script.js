document.querySelector("#check-btn").addEventListener("click", (event)=>{
    
    event.preventDefault();

    let text = document.querySelector("#number-input").value;

    if (text.length < 2 || isNaN(text)) {
        alert("Please enter a number containing 2 digits.");
        return;
    }

    let reversedText = text.split("").reverse().join("");
    
    if (text == reversedText) {
        alert("The number is a palindrome.");
    }
    else {
        alert("The number is not a palindrome.");
    }
});