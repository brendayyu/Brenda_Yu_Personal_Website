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

findTheBanana(L1);
findTheBanana(L2);

// if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/67250_webdevlabs/brenday-lab3/") {
//     greetingFunc();
// }


function greetingFunc() {
    var d = new Date(); 
    var h = d.getHours();
    var E = document.getElementById("greeting");

    if (h>=5 && h<12) {
        E.innerHTML = "Good morning, my name is Brenda!";
    } else if (h >= 12 && h < 18) {
        E.innerHTML = "Good afternoon, my name is Brenda!";
    } else if (h >= 18 && h < 20) {
        E.innerHTML = "Good evening, my name is Brenda!";
    } else {
        E.innerHTML = "Good night, my name is Brenda!";
    }

}

var L = window.location.href;

if (L.includes("index.html")) {
    greetingFunc();
}

function checkValidity() {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const commentInput = document.getElementById('commentInput');
    
    if (!nameInput.checkValidity() || !emailInput.checkValidity() || !commentInput.checkValidity()) {
        document.getElementById("error").innerHTML = "Make sure to enter the required information before submitting!";
    }
}