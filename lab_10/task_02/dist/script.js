let strtValInput = document.querySelector("#start-val");
let endValInput = document.querySelector("#end-val");


function checkInputFields() {
    return strtValInput.value !== "" && endValInput.value !== "";
}

function checkErrors(strNum1, strNum2) {

    let errMsg1 = document.querySelector("#error-msg-1");
    let errMsg2 = document.querySelector("#error-msg-2");

    errMsg1.textContent = "";
    errMsg2.textContent = "";

    if (strNum1.length > 3) {
        errMsg1.textContent = "Please enter a number with less than 4 digits.";
        return false;
    }
    if (strNum2.length > 3) {
        errMsg2.textContent = "Please enter a number with less than 4 digits.";
        return false;
    }

    strNum1 = parseInt(strNum1);
    strNum2 = parseInt(strNum2);

    if (strNum1 < 0) {
        errMsg1.textContent = "Please enter positive value.";
        return false;
    }
    if (strNum2 < 0) {
        errMsg2.textContent = "Please enter positive value.";
        return false;
    }
    if (strNum1 >= strNum2) {
        errMsg2.textContent = "Ending value must be greater than the starting one.";
        return false;
    }

    return true;
}

document.querySelector("#submit-btn").addEventListener("click", (event)=>{
    event.preventDefault();

    if (!checkInputFields()) {
        alert("Please fill in all the fields.");
        return;
    }
    if (checkErrors(strtValInput.value, endValInput.value) === false) {
        return;
    }
    

    const strtVal = parseInt(strtValInput.value);
    const endVal = parseInt(endValInput.value);

    // Sum of all natural numbers from a to b: (b-a+1)*(a+b)/2, a<=b
    const result = (endVal - strtVal + 1) * (strtVal + endVal) / 2;
    alert("The sum of all natural numbers from " + strtVal + " to " + endVal + " is: " + result);
})