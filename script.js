function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = now.toString();
}

// Call the function once to initialize
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);

document.getElementById('changeColorBtn').addEventListener('click', function(){
    const colors = ['#FFCDD2', '#C8E6C9', '#BBDEFB', '#FFF9C4', '#D1C4E9'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});