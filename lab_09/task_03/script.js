document.querySelector("#submit-btn").addEventListener("click", (event) => {
    event.preventDefault();
    let year = document.querySelector("#year").value;
    year = parseInt(year);

    if (isNaN(year)) {
        alert("Please enter a valid year.");
        return;
    }

    // Determine if the year is a leap year
    let status = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
        ? "Leap Year"
        : "Not a Leap Year";

    // Create a new row with the year and status
    let table = document.querySelector("table");
    let newRow = table.insertRow();

    // Create new cells and append them
    let yearCell = newRow.insertCell(0);
    yearCell.textContent = year;

    let statusCell = newRow.insertCell(1);
    statusCell.textContent = status;
});