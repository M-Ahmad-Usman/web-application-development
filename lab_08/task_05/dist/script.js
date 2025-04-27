
document.querySelector("#submit-btn").addEventListener("click", (event) => {
    event.preventDefault();
    // Get the values from the input fields
    let startVal = document.querySelector("#start-val").value;
    let endVal = document.querySelector("#end-val").value;


    if (startVal === "" || endVal === "") {
        alert("Please fill in both fields.");
        return;
    }
    else if (startVal.includes(".") || endVal.includes(".")) {
        alert("Please enter whole numbers only.");
        return;
    }

    startVal = parseInt(startVal);
    endVal = parseInt(endVal);

    if (isNaN(startVal) || isNaN(endVal)) {
        alert("Please enter valid numbers.");
        return;
    }
    else if (startVal < 0 || endVal < 0) {
        alert("Please enter positive numbers.");
        return;
    }
    else if (startVal >= endVal) {
        alert("Start value must be less than end value.");
        return;
    }

    alert(`Random Number is: ${Math.floor(Math.random() * (endVal - startVal + 1) + startVal)}`);
});