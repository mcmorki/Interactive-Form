$('#name').focus(); // on page load focus on the name input 


$('#other-title').hide(); // By default use jQuery to hide the input text box

// We can use the change(); function to watch the state of title selected 
$('#title').on("change", function () {
  if ($(this).val() === 'other') {
    $('#other-title').show()// run some conditional logic only to reveal the textbox when the title selected is other
  } else {
    $('#other-title').hide();
  }
});

$('#colors-js-puns').hide();//updates the color selection options when a theme is selected

// We can use the change(); function to watch the state of title selected 
$('#design').change(function () {
  if ($(this).val() === "js puns") {
    $('#colors-js-puns').show();//If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold.
    $('#color').html('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option><option value="gold">Gold (JS Puns shirt only)</option>');
  } else if (
    $(this).val() === "heart js") {
    $('#colors-js-puns').show();//If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey.
    $('#color').html('<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>');
  } else {
    $('#colors-js-puns').hide();

  };
})

// when
//     //  fieldset 2 - Activities
//     //  Check Activities
//     //      Main Conference                         $200
//     //      Workshops Optional
//     //          JS Frameworks WS - Tue 9am-12pm     $100    (Conflicts w/Express)
//     //          JS Libraries WS  - Tue 1pm-4pm      $100    (Conflicts w/Node.js)
//     //          Express WS       - Tue 9am-12pm     $100    (Conflicts w/JS Frameworks)
//     //          Node.js WS       - Tue 1pm-4pm      $100    (Conflicts w/JS Libraries)
//     //          Build Tools WS   - Wed 9am-12pm     $100
//     //          npm WS           - Wed 1pm-4pm      $100

// sets all classes with the same time in a variable for easy access 
var check1 = $("input[name='js-frameworks']")
var check2 = $("input[name='express']")
var check3 = $("input[name='js-libs']")
var check4 = $("input[name='node']")
var check5 = $("input[name='build-tools']")
var check6 = $("input[name='npm']")
var check7 = $("input[name='all']")
let $total = 0;

// checkStatus function watches the state of the activities selected 
function checkStatus() {

  $total = 0

  if (check1.is(':checked')) {
    $total += 100
    check2.prop('disabled', true);              //If js-frameworks is selected disable the express option
  } else {                                      // else do not disable express if js-frameworks wasnt selected
    check2.prop('disabled', false);
  }
  if (check2.is(':checked')) {
    $total += 100
    check1.prop('disabled', true)               //If express is selected disable the js-frameworks option
  } else {                                      // else do not disable js-frameworks if express wasnt selected
    check1.prop('disabled', false);
  }

  if (check3.is(':checked')) {
    $total += 100
    check4.prop('disabled', true);              //If js-libs is selected disable the node option
  } else {                                      // else do not disable node if js-libs wasnt selected
    check4.prop('disabled', false);
  }
  if (check4.is(':checked')) {
    $total += 100
    check3.prop('disabled', true)                //If node is selected disable the js-libs option
  } else {                                       // else do not disable  js-libs if node wasnt selected
    check3.prop('disabled', false);
  }
  if (check5.is(':checked')) {
    $total += 100
  }
  if (check6.is(':checked')) {
    $total += 100
  }
  if (check7.is(':checked')) {
    $total += 200
  }

  $('.totalDiv').removeClass('is-hidden');

  $('.total-display').html('Total: $' + parseInt($total));
};

// listens when all are clicked 
check1.on('click', checkStatus);
check2.on('click', checkStatus);
check4.on('click', checkStatus);
check3.on('click', checkStatus);
check5.on('click', checkStatus);
check6.on('click', checkStatus);
check7.on('click', checkStatus);


$('.activities').append('<div class="totalDiv"><label name="total-amount" class="total-display">Total: </label></div>');
$('.totalDiv').addClass('is-hidden');

$(".credit-card").hide();

$('#payment').on("change", function () {
  if ($(this).val() == 'credit card') {
    $(".credit-card").show();
  } else {
    $(".credit-card").hide();
  }
});

const activityLegend = document.querySelector('form .actitity-legend')
const paymentLegend = document.querySelector('form .payment-legend')



// /Variables needed in sections
const paymentDiv = document.querySelector("#payment");
const creditCard = document.querySelector("#credit-card");
const payPal = document.querySelectorAll("fieldset div p")[0];
const bitcoin = document.querySelectorAll("fieldset div p")[1];
const ccNumber = document.getElementById("cc-num");
const zip = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const exDate = document.getElementById("exp-month");
const exYear = document.getElementById("exp-year");

//Hide all options until selection is made
// $(creditCard).hide();
$(bitcoin).hide();
$(payPal).hide();

//Display payment sections based on payment option selectedValue
paymentDiv.addEventListener('change', (e) => {
  if (e.target.value === 'credit card') {
    payPal.style.display = 'none';
    creditCard.style.display = 'block';
    bitcoin.style.display = 'none';
    console.log("cc selected");
  ;
  }

  if (e.target.value === 'paypal') {
    payPal.style.display = 'block';
    creditCard.style.display = 'none';
    bitcoin.style.display = 'none';
    console.log("pp selected");
    paymentLegend.innerText = "Payment Info";
    paymentLegend.classList.remove('errorText');
  }

  if (e.target.value === 'bitcoin') {
    payPal.style.display = 'none';
    creditCard.style.display = 'none';
    bitcoin.style.display = 'block';
    console.log("bc selected");
    paymentLegend.innerText = "Payment Info";
    paymentLegend.classList.remove('errorText');
  }
});

//validation function for Credit Card info.
function creditCardValidation() {
  const cardRegex = /^\d{13,16}$/;
  if  (cardRegex.test($('#cc-num').val()))   {
    ccNumber.previousElementSibling.textContent = "Card Number:";
    ccNumber.previousElementSibling.classList.remove('errorText');
    ccNumber.classList.remove('errorBox');
    return true;
  }else {
    ccNumber.previousElementSibling.classList.add('errorText');
    ccNumber.previousElementSibling.textContent = "Please enter a number that is between 13 and 16 digits long.";
    ccNumber.classList.add('errorBox');
  }
}
//Live cc validation (calls the above function)
function paymentVal() {
  ccNumber.addEventListener('focusout', (e) => {
    //if credit card # is of appropriate length..
    creditCardValidation();
  })
};

//validation function for Zip Code Value
function finalZipVal() {
  //if credit card 5 digits long..
  if (zip.value.length === 5) {
    zip.previousElementSibling.textContent = "Zip Code:";
    zip.previousElementSibling.classList.remove('errorText');
    zip.classList.remove('errorBox');
    return true;
  }
  //if zip is of incorrect length
  else {
    zip.previousElementSibling.classList.add('errorText');
    zip.previousElementSibling.innerText = "Please enter a valid zip code.";
    zip.classList.add('errorBox');
  }
}

//Live zip code validation (calls on the function above)
zip.addEventListener('focusout', (e) => {
  finalZipVal();
});

//Validation Function for CVV #
function finalCVVVal() {
  //if credit card 5 digits long..
  if (cvv.value.length === 3) {
    cvv.previousElementSibling.textContent = "CCV:";
    cvv.previousElementSibling.classList.remove('errorText');
    cvv.classList.remove('errorBox');
    return true;
  }
  //if zip is of incorrect length
  else {
    cvv.previousElementSibling.classList.add('errorText');
    cvv.previousElementSibling.innerText = "Please enter the 3-digit CVV found on the back of the card.";
    cvv.classList.add('errorBox');
  }
};

//Live ccv validation
cvv.addEventListener('focusout', (e) => {
  finalCVVVal();
})


paymentVal();




const emailVal = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Email field
function errorEmail() {
  console.log(name);
  const emailVal = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //If email doesn't have any text...
  if (email.value === "") {
    email.previousElementSibling.classList.add('errorText');
    email.previousElementSibling.innerText = "Oops! You forgot to enter your email.";
    email.classList.add('errorBox');
    //If email is correctly formatted...
  } else if (email.value.match(emailVal)) {
    email.previousElementSibling.textContent = "Email:";
    email.previousElementSibling.classList.remove('errorText');
    email.classList.remove('errorBox');
    return true;
    //If email is incorrectly formatted...
  } else {
    email.previousElementSibling.classList.add('errorText');
    email.previousElementSibling.innerText = "Please enter a valid email address.";
    email.classList.add('errorBox');
    return false;
  }
}


