let startVal = document.querySelector("#start-val");
let endVal = document.querySelector("#end-val");

let errorMessage = document.querySelector("#error");

let evenListItem = document.querySelector("#even-numbers");
let oddListItem = document.querySelector("#odd-numbers");

document.querySelector("#submit-btn").addEventListener("click", (event) => {
    event.preventDefault();

    // Clear previous results
    errorMessage.textContent = "";
    evenListItem.innerHTML = "";
    oddListItem.innerHTML = "";

    let start = parseInt(startVal.value);
    let end = parseInt(endVal.value);

    // Error Handling
    if (isNaN(start) || isNaN(end)) {
        errorMessage.innerHTML = "&#9432 Please enter valid numbers.";
        return;
    }
    else if (start >= end) {
        errorMessage.innerHTML = "&#9432 Start value must be less than end value.";
        return;
    }

    // Generate even and odd numbers
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenListItem.innerHTML += `${i}, `;
        } 
        else {
            oddListItem.innerHTML += `${i}, `;
        }
    }
    
    // Remove the last comma and space
    evenListItem.textContent = evenListItem.textContent.slice(0, -2);
    oddListItem.textContent = oddListItem.textContent.slice(0, -2);
});