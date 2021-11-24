const buttonCalculate = document.getElementById("calculate");

let inputnumber1 = document.getElementById("zahl1");
let inputnumber2 = document.getElementById("zahl2");
let inputnumber3 = document.getElementById("zahl3");
let inputnumber4 = document.getElementById("zahl4");

function calculate(event){
    event.preventDefault();
    console.log("calculate");
    const number1 = inputnumber1.value;
    const number2 = inputnumber2.value;
    const number3 = inputnumber3.value;
    const number4 = inputnumber4.value;
    console.log(number1 + " " + number2 + " " + number3 + " " + number4);

    const ratio = number3 / number1;
    
    const result = ratio * number2;
    console.log(result);

    inputnumber4.value = result;

    console.log(number4);
}

buttonCalculate.addEventListener("click", calculate);