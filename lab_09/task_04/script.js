document.querySelector('#submit-btn').addEventListener('click', (event) => {
    event.preventDefault();
    console.log("hello");
    

    const text = document.getElementById('string-input').value;
    const char = document.getElementById('char-input').value;
    
    if (text && char) {
        // Count occurrences of the character in the string
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === char) {
                count++;
            }
        }
        
        // Display the result using alert
        alert(`"${char}" appears ${count} time(s) in the text.`);
    } else {
        alert("Please enter both a string and a character.");
    }

});
