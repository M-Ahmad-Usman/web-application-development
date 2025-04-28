document.querySelector("#check-btn").addEventListener("click", (event)=>{
    
    event.preventDefault();

    let text = document.querySelector("#string-input").value;

    if (text === "" || !isNaN(text)) {
        alert("Please enter a string.");
        return;
    }

    let reversedText = text.split("").reverse().join("");
    
    if (text == reversedText) {
        alert("The string is a palindrome.");
    }
    else {
        alert("The string is not a palindrome.");
    }
});