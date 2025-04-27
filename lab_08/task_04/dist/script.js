document.querySelector("#submit-btn").addEventListener("click", (event)=> {

    let inputVal = parseInt(document.querySelector("#input-val").value);

    // Error handling
    if (isNaN(inputVal)) {
        alert("Please enter a valid number");
        return;
    }
    else if (inputVal <= 0) {
        alert("Please enter a positive number");
        return;
    }
    else if (inputVal > 10000) {
        alert("Please enter a number less than or equal to 10000");
        return;
    }

    // Check if the number is prime
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(inputVal); i++) {
        if (inputVal % i === 0) {
            isPrime = false;
            break;
        }
    }

    // Display result
    if (isPrime) alert(`${inputVal} is a prime number`);
    else alert(`${inputVal} is not a prime number`);

});