function getPin(){
    const random = Math.random() * 10000;
    const pin = (random + ' ').split('.')[0];
    
    if(pin.length == 4){
        return pin;
    }
    else{
         getPin();
    }
}

//display generated pin
function generatePin(){
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}

// handle calculator button event
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        // handle backspace
        //handle clear
    }
    else{
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})


//verifying Pin
function verifyPin(){
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if(pin == typedPin){
        alert('Pin Matched... Secret door is opening for you');
    }
    else{
        alert("Pin Didn't Match, Please try again");
    }
}