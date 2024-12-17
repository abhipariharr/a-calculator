const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
function Calculate(){
    try{
        display.value = eval(display.value);
        // display.value = "I Love You";
    }
    catch(error){
        display.value = "Error"
    }
}
