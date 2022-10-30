const input = document.getElementById("input");
const clean_btn = document.getElementById("clean");
const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");
const num0 = document.getElementById("0");
const division = document.getElementById("division");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const dot = document.getElementById(".");
const equal = document.getElementById("equal");
const plus = document.getElementById("plus");
let frstValue = 0;
let scndValue = 0;
let operator = '';

function clean(){
    input.innerText=('')
}

function addNum(id){
    input.innerText += id;
    
}

function addOperator(oper){
    operator = oper;
    frstValue = input.innerText;
    clean()
    // parse int was not working for some reason, 
    //so i used this way, to make a num out of string...
    frstValue /= 1;    
}


function result(){
    let result = 0;

    scndValue = input.innerText;
    scndValue /=1;
    switch(operator){
        case '/': 
        result = frstValue / scndValue;
        break;
        case '+': 
        result = frstValue + scndValue;
        break;
        case '-': 
        result = frstValue - scndValue;
        break;
        case '*': 
        result = frstValue * scndValue;
        break;
    }
    input.innerText = (result);
}

