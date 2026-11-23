
document.title = 'calculator'
function num(reg){
    let  userInput = document.getElementById('input')
    userInput.value += reg
    // console.log(reg);
    
}
function equal(){
    let userInput = document.getElementById('input')
    userInput.value = eval(userInput.value)
}

function dele(){
    let userInput = document.getElementById('input')
    userInput.value = userInput.value.slice(0, -1)
}
function clea(){
    let userInput = document.getElementById('input')
    userInput.value = ""
}




// let display = document.getElementById('display');
// let userInput = document.getElementById('display')

// function showNumber(number) {
//     display.value = display.value + number;
// }




// function clea(){
//     display.value = "";
// }
// function dele(){
//     display.value = display.value.slice(0, -1);
// }



// let firstNumber = "";
// let operator = "";


// function opera(symbol) {
//     firstNumber = Number(display.value);

//     operator = symbol;

//     display.value = "";
// }

// function equal(){
// let userInput = document.getElementById('input').value;
    
// }