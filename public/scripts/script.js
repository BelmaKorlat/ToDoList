const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        const row = this.parentNode.parentNode;
        const id = row.querySelector('td:nth-child(1)');
        const task = row.querySelector('td:nth-child(2)');
        if (this.checked) {
            id.style.textDecoration = "line-through";
            task.style.textDecoration = "line-through";
            id.style.color = "black";
            task.style.color = "black";
        } else {
            id.style.textDecoration = "none";
            task.style.textDecoration = "none";
            id.style.color = "white";
            task.style.color = "white";
        }
    });
});

//Adding current date
function getDayAsString(day) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
}

// Create a new date instance
let currentDate = new Date();

// Get the day, month, and year
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; // Months are zero-indexed
let year = currentDate.getFullYear();
let dayString = getDayAsString(currentDate.getDay());

// Format the date
let formattedDate = addLeadingZero(day) + "." + addLeadingZero(month) + "." + year;

// Display the date
document.getElementById("date").innerHTML = dayString + " : " + formattedDate;

// Function to add a leading zero if the number is less than 10
function addLeadingZero(number) {
    return (number < 10 ? "0" : "") + number;
}

