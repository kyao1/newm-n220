//Variables
var num = 0;
var square1Step = 0;
var square2Step = 0;
var square3Step = 0;


//functions
function addOne() {
    num = num + 1;
    document.getElementById("count").textContent = num;
}

function addFive() {
    num = num + 5;
    document.getElementById("count").textContent = num;
}

function addTen() {
    num = num + 10;
    document.getElementById("count").textContent = num;
}

function changeTheme() {
    document.body.classList.toggle("dark");
}

function cycleSquare1() {
    square1Step = square1Step + 1;

    if (square1Step === 1) {
        document.getElementById("square1").style.backgroundColor = "yellow";
    } else if (square1Step === 2) {
        document.getElementById("square1").style.backgroundColor = "blue";
    } else {
        document.getElementById("square1").style.backgroundColor = "red";
        square1Step = 0;
    }
}

function cycleSquare2() {
    square2Step = square2Step + 1;

    if (square2Step === 1) {
        document.getElementById("square2").style.backgroundColor = "yellow";
    } else if (square2Step === 2) {
        document.getElementById("square2").style.backgroundColor = "blue";
    } else {
        document.getElementById("square2").style.backgroundColor = "red";
        square2Step = 0;
    }
}

function cycleSquare3() {
    square3Step = square3Step + 1;

    if (square3Step === 1) {
        document.getElementById("square3").style.backgroundColor = "yellow";
    } else if (square3Step === 2) {
        document.getElementById("square3").style.backgroundColor = "blue";
    } else {
        document.getElementById("square3").style.backgroundColor = "red";
        square3Step = 0;
    }
}

function resetPage() {
    num = 0;
    document.getElementById("count").textContent = num;

    document.body.classList.remove("dark");

    document.getElementById("square1").style.backgroundColor = "red";
    document.getElementById("square2").style.backgroundColor = "red";
    document.getElementById("square3").style.backgroundColor = "red";

    square1Step = 0;
    square2Step = 0;
    square3Step = 0;
}


//events listeners
document.getElementById("add1").addEventListener("click", addOne);
document.getElementById("add5").addEventListener("click", addFive);
document.getElementById("add10").addEventListener("click", addTen);
document.getElementById("themeButton").addEventListener("click", changeTheme);
document.getElementById("resetButton").addEventListener("click", resetPage);

document.getElementById("square1").addEventListener("mouseover", cycleSquare1);
document.getElementById("square2").addEventListener("mouseover", cycleSquare2);
document.getElementById("square3").addEventListener("mouseover", cycleSquare3);
