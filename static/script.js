var x = 5;
var y = 7;
var z = x+y;
var A = "Hello ", B = "world!"
var C = A + B

console.log(z);
console.log(C);

function SumNPrint(x1, x2){
    var x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

var L1 = ["Watermelon", 'Pineapple', "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(fruitArray) {
    fruitArray.forEach(function(fruit, index) {
        if (fruit == "Banana") {
            alert("We found a Banana in array " + index);
        }
    });
}

// findTheBanana(L1);
// findTheBanana(L2);

var L = window.location.href;

if (L.includes("index.html")) {
    greetingFunc();
}

function addYear() {
    var d = new Date();
    var y = d.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML+=y;
}

function greetingFunc() {
    var d = new Date(); 
    var h = d.getHours();
    var E = document.getElementById("greeting");
 
    if (h>=5 && h<12) {
        E.innerHTML = "Good morning, my name is Brenda Yu!";
    } else if (h >= 12 && h < 18) {
        E.innerHTML = "Good afternoon, my name is Brenda Yu!";
    } else if (h >= 18 && h < 20) {
        E.innerHTML = "Good evening, my name is Brenda Yu!";
    } else {
        E.innerHTML = "Good night, my name is Brenda Yu!";
    }
}

// function showList() {
//     document.getElementById("favList").style.display = "block";
//     document.getElementById("showButton").style.display = "none";
// }

function validate() {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const commentInput = document.getElementById('commentInput');
    console.log("hello");
            
    if (!nameInput.checkValidity() || !emailInput.checkValidity() || !commentInput.checkValidity()) {
        document.getElementById("error").innerHTML = "Make sure to enter all the required information before submitting!";
    }
}

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response=> {
            return response.json();
        })
        .then(data=> {
            const advice=data.slip.advice;
            document.getElementById("adviceText").innerText=advice;
        })
        .catch(error=> {
            document.getElementById("adviceText").innerText="Oopsies, something went wrong...";
            console.error("There is an issue", error);
        })
}

