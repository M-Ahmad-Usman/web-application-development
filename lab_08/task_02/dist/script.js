let findBtn = document.getElementById("find-btn");

let textBx1 = document.getElementById("num1");
let textBx2 = document.getElementById("num2");
let textBx3 = document.getElementById("num3");

findBtn.addEventListener("click", (event) => {
    if (textBx1.value === "" || textBx2.value === "" || textBx3.value === "") {
        alert("Please fill all the fields");
        return;
    }

    let num1 = parseFloat(textBx1.value);
    let num2 = parseFloat(textBx2.value);
    let num3 = parseFloat(textBx3.value);

    alert("The Smallest Number is: " + Math.min(num1, num2, num3));
    event.preventDefault();
});