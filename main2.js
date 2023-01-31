let display = document.getElementById('finalDisplay');
let btnFirst = document.querySelectorAll('.text-btn');
let secondBtn = document.querySelectorAll('.btn-second');
let math = document.querySelectorAll('.math');


let num1 = [];
let num2 = [];
let digit2 = 0;
let digit1 = 0;
let stopEx = 0;
let stopEx2 = 0;
let operator = "";
let sum = 0;


function deletion() {
       display.textContent = 0;
       num1 = [];
       num2 = [];
       digit2 = 0;
       digit1 = 0;
       stopEx = 0;
       stopEx2 = 0;
}

function operation() {
    stopEx = 1;
    stopEx2 = 0;
    
}

function minusDigit() {
    if (display.textContent === digit1.toString()) {
        num1.pop()
        let digitString1 = digit1.toString().slice(0, -1);
        display.textContent = digitString1;
        digit1 = +digitString1;
      };
    if (display.textContent === digit2.toString()) {
        num2.pop()
        let digitString2 = digit2.toString().slice(0, -1);
        display.textContent = digitString2;
        digit2 = +digitString2;
     };
  }



function operate(a,b,operator) {
   
   if (operator === "+") { 
       let sum1 = ((a * 10) + (b * 10)) / 10;
       sum = +sum1.toString().slice(0,9);
       display.textContent = sum;
       num1 = [];
       num2 = [];
       digit2 = 0;
       digit1 = 0;
       stopEx = 0;
       stopEx2 = 0;
       };  


    if (operator === "-") { 
            sum = (a * 10 - b * 10) / 10;
            display.textContent = sum;
            num1 = [];
            num2 = [];
            digit2 = 0;
            digit1 = 0;
            stopEx = 0;
            stopEx2 = 0;
            };  

     if (operator === "*" ) { 
            let sum1 = ((a * 10) * (b * 10)) / 100;
            sum2 = Number((sum1).toFixed(6));
            sum = +sum2.toString().slice(0,9);
            display.textContent = sum;
            num1 = [];
            num2 = [];
            digit2 = 0;
            digit1 = 0;
            stopEx = 0;
            stopEx2 = 0;
            };  


    if (operator === "/") { 
            let sum1 = ((a * 10) / (b * 10));
            sum = Number((sum1).toFixed(6)); 
            display.textContent = sum;
            num1 = [];
            num2 = [];
            digit2 = 0;
            digit1 = 0;
            stopEx = 0;
            stopEx2 = 0;
             };

}
    


btnFirst.forEach(button => {
    button.addEventListener('click', () => {
    
    if (num1.length > 8) {return};
    if (stopEx === 1) {return};
    stopEx2 = 1;
    num1.push(button.value);
    digit1 = +num1.toString().split(',').join('');
    display.textContent = digit1;
    });
});

secondBtn.forEach(button => {
    button.addEventListener('click', () => {
    if (stopEx2 === 1) {return};
    if (num2.length > 8) {return};
    num2.push(button.value);
    digit2 = +num2.toString().split(',').join('');
    display.textContent = digit2;
    });

});

    
math.forEach(button => {
    button.addEventListener('click', () => {
    operator = button.value;
    display.textContent = operator;
        });
    });
    

