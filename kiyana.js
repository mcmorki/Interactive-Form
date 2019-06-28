
function finalCCVal() {
    if ((ccNumber.value.length >= 13) && (ccNumber.value.length <= 16)) {
        
        ccNumber.previousElementSibling.textContent = "Card Number:";
        ccNumber.previousElementSibling.classList.remove('errorText');
        ccNumber.classList.remove('errorBox');
        return true;
    }
    //if CC is of incorrect length
    else if (ccNumber.value.length === 0) {
       
        ccNumber.previousElementSibling.classList.add('errorText');
        ccNumber.previousElementSibling.innerText = "Please enter a credit card number.";
        ccNumber.classList.remove('errorBox');

    } else {
       
        ccNumber.previousElementSibling.classList.add('errorText');
        ccNumber.previousElementSibling.textContent = "Please enter a number that is between 13 and 16 digits long.";
        ccNumber.classList.remove('errorBox');
    }
}

const ccNumber = document.getElementById("cc-num");
const cardRegex = /^\d{13,16}$/;
if ((!cardRegex.test($('#cc-num').val())


function finalCCVal() {
    if ((!cardRegex.test($('#cc-num').val()) {
        show('errorBox');
        }
    
    
    unction checkCvv() {
        if (cvvfield.value === '' || cvvfield.value === null) {
            cvvfield.setCustomValidity("Please enter a CVV number");
            cvvError.textContent = 'Please enter a CVV number';
            cvvError.setAttribute('class', 'error');
            cvvClass.appendChild(cvvError);
            return false;
        } else if (cvvfield.value.length < 3) {
            cvvfield.setCustomValidity("Please enter a 3 digit CVV number");
            cvvError.textContent = 'Please enter a 3 digit CVV number';
            cvvError.setAttribute('class', 'error');
            cvvClass.appendChild(cvvError);
            return false;
        } else if (cvvfield.value.length > 3) {
            cvvfield.setCustomValidity("Please enter only 3 digits");
            cvvError.textContent = 'Please enter only 3 digits';
            cvvError.setAttribute('class', 'error');
            cvvClass.appendChild(cvvError);
            return false;
        } else if (cvvError.parentElement !== null) {
            cvvfield.setCustomValidity("");
            cvvClass.removeChild(cvvError);
        }
        return true;
    }
    var cvvfield = document.getElementById('cvv');
    var cvvClass = cvvfield.parentElement;
    var cvvError = document.createElement('label');
    cvvfield.addEventListener('keyup', checkCvv, false);

    //Check that the user entered anything in the zip field
    function checkZip() {
        if (zipfield.value === '' || zipfield.value === null) {
            zipfield.setCustomValidity("Please enter a valid 5 digit zip code");
            zipError.textContent = 'Please enter a valid 5 digit zip code';
            zipError.setAttribute('class', 'error');
            zipClass.appendChild(zipError);
            return false;
        } else if (zipfield.value.length < 5) {
            zipfield.setCustomValidity("Please enter a zip code that is at least 5 digits long");
            zipError.textContent = 'Please enter a zip code that is at least 5 digits long';
            zipError.setAttribute('class', 'error');
            zipClass.appendChild(zipError);
            return false;
        } else if (zipfield.value.length > 5) {
            zipfield.setCustomValidity("Please enter a zip code that is no more than 5 digits long");
            zipError.textContent = 'Please enter a zip code that is no more than 5 digits long';
            zipError.setAttribute('class', 'error');
            zipClass.appendChild(zipError);
            return false;
        } else if (zipError.parentElement !== null) {
            zipfield.setCustomValidity("");
            zipClass.removeChild(zipError);
        }
        return true;
    }
    var zipfield = document.getElementById('zip');
    var zipClass = zipfield.parentElement;
    var zipError = document.createElement('label');
    zipfield.addEventListener('keyup', checkZip, false);

    //Check that the user entered anything in the credit card field
    function checkCC() {
        if (ccfield.value === '' || ccfield.value === null) {
            ccfield.setCustomValidity("Please enter a valid Credit Card number.");
            ccError.textContent = 'Please enter a valid Credit Card number.';
            ccError.setAttribute('class', 'error');
            ccClass.appendChild(ccError);
            return false;
        } else if (ccfield.value.length < 13) {
            ccfield.setCustomValidity("Please enter a number that is at least 13 digits long.");
            ccError.textContent = 'Please enter a number that is at least 13 digits long.';
            ccError.setAttribute('class', 'error');
            ccClass.appendChild(ccError);
            return false;
        } else if (ccfield.value.length > 16) {
            ccfield.setCustomValidity("Please enter a number that is no more than 16 digits long.");
            ccError.textContent = 'Please enter a number that is no more than 16 digits long.';
            ccError.setAttribute('class', 'error');
            ccClass.appendChild(ccError);
            return false;
        } else if (ccError.parentElement !== null) {
            ccfield.setCustomValidity("");
            ccClass.removeChild(ccError);
        }
        return true;