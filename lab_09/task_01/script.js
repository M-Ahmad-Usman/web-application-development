// Taking first positive integer input from the user and validating it
let num1 = "";
while (num1 === "") {
    num1 = parseInt(prompt("Enter first positive integer: "));
    if (isNaN(num1) || num1 <= 0) {
        alert("Please enter a valid positive integer.");
        num1 = "";
    }
} 

// Taking second positive integer input from the user and validating it
let num2 = "";
while (num2 === "") {
    num2 = parseInt(prompt("Enter first positive integer: "));
    if (isNaN(num2) || num2 <= 0) {
        alert("Please enter a valid positive integer.");
        num2 = "";
    }
}

// Function to calculate GCD using Euclidean algorithm
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Calculate GCD
let result = gcd(num1, num2);
// Display the results
document.querySelector("#gcd-hcf").innerHTML = result;