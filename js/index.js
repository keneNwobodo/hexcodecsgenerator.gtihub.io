const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const myButton = document.getElementById('btn');
const myColor = document.querySelector('.color');

myButton.addEventListener('click', function() {
    let colorOfHex = "#";
    for(var x = 0; x < 6; x++) {
        colorOfHex += hex[myRandomNumber()];
    }
    myColor.textContent = colorOfHex;
    document.body.style.backgroundColor = colorOfHex;
})

function myRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}