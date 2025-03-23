let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
} 

function appendOperator(operator) {

    if (display.value !== "" && !isNaN(display.value[display.value.length-1])){
        display.value += operator;
    }

}

function appendDot(){
    let lastNumber = display.value.split(/[\+\-\*\/]/).pop();
    if(!lastNumber.includes(".")){
        display.value += ".";
    }

}

function calculate(){
    try{
        let result = eval(display.value);
        if ( result === Infinity || result === - Infinity){
            throw new Error("Không thể chia cho 0");

        }
        display.value = result;

    } catch (error){
        alert("Lỗi: " + error.message);
        display.value = "";
    }
}

function clearDisplay() {
    display.value = "";
}
