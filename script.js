let operand ="";
let number1 ="";
let number2 ="";
let issecond = false;
const screen = document.getElementById("screen");
const clear = document.getElementById("clear");
const backbtn = document.getElementById("backspace");
const but9 = document.getElementById("but9");
const but8 = document.getElementById("but8");
const but7 = document.getElementById("but7");
const but6 = document.getElementById("but6");
const but5 = document.getElementById("but5");
const but4 = document.getElementById("but4");
const but3 = document.getElementById("but3");
const but2 = document.getElementById("but2");
const but1 = document.getElementById("but1");
const but0 = document.getElementById("but0");

const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const equalsBtn = document.getElementById("equals");

// Operator button logic: store number1 and operand, clear screen for number2
if (addBtn) {
    addBtn.onclick = function() {
        number1 = screen.textContent;
        operand = "+";
        screen.textContent = "";
    };
}
if (subtractBtn) {
    subtractBtn.onclick = function() {
        number1 = screen.textContent;
        operand = "-";
        screen.textContent = "";
    };
}
if (multiplyBtn) {
    multiplyBtn.onclick = function() {
        number1 = screen.textContent;
        operand = "*";
        screen.textContent = "";
    };
}
if (divideBtn) {
    divideBtn.onclick = function() {
        number1 = screen.textContent;
        operand = "/";
        screen.textContent = "";
    };
}

// Equals button logic: store number2, perform calculation, display result
if (equalsBtn) {
    equalsBtn.onclick = function() {
        number2 = screen.textContent;
        let result = 0;
        let n1 = parseFloat(number1);
        let n2 = parseFloat(number2);
        switch (operand) {
            case "+":
                result = n1 + n2;
                break;
            case "-":
                result = n1 - n2;
                break;
            case "*":
                result = n1 * n2;
                break;
            case "/":
                result = n2 !== 0 ? n1 / n2 : "Error";
                break;
            default:
                result = screen.textContent;
        }
        screen.textContent = result;
        // Reset for next calculation
        number1 = result;
        number2 = "";
        operand = "";
    };
}


function operator(){
    screen.textContent = "";
}

function addToScreen(value) {
  if (screen.textContent === "0") {
    screen.textContent = value;
  } 
  else{
    screen.textContent += value;
  }
  
}

function buttons(){
 
   but9.onclick = function(){
     addToScreen(but9.value);
   }
   but8.onclick = function(){
     addToScreen(but8.value);
   }
   but7.onclick = function(){
     addToScreen(but7.value);
   }
   but6.onclick = function(){
    addToScreen(but6.value);
   }
   but5.onclick = function(){
    addToScreen(but5.value);
   }
   but4.onclick = function(){
     addToScreen(but4.value);
   }
   but3.onclick = function(){
    addToScreen(but3.value);
   }
   but2.onclick = function(){
    addToScreen(but2.value);
   }
   but1.onclick = function(){
    addToScreen(but1.value);
   }
   but0.onclick = function(){
    addToScreen(but0.value);
   }

}

buttons();
function operate(){
      number1 = screen.textContent;
      operand
}


function decimal(){

}
clear.onclick = function () {
  screen.textContent = "0";
};
function Backspace(){
    let current = screen.textContent;
    screen.textContent = current.length > 1 ? current.slice(0, -1) : "0";
};
backbtn.onclick = Backspace;
