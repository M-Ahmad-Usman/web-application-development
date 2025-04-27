
function validateInput(input) {
    const regex = /([0-9]+,\s*){4}[0-9]$/;
    return regex.test(input);
}

// Take input and validate it using regex
let input1 = prompt("Enter first five values in a comma-separated format");
while (!validateInput(input1)) {
    alert("Please enter valid values in a valid format.");
    input1 = prompt("Enter first five values in a comma-separated format");
}

let input2 = prompt("Enter second five values in a comma-separated format");
while (!validateInput(input2)) {
    alert("Please enter valid values in a valid format.");
    input2 = prompt("Enter second five values in a comma-separated format");
}

let arr1 = input1.split(/[,\s]+/)
let arr2 = input2.split(/[,\s]+/)

let isEqual = true;
for (let i = 0; i < 5; i++) {
    if (arr1[i] !== arr2[i]) {
        isEqual = false;
        break;
    }
}

if (isEqual) {
    alert("The values are equal.");
}
else {
    alert("The values are not equal.");
}
