

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
$("p:first").hide();
$("p:last").hide()


// /Variables needed in sections

const ccNumber = document.getElementById("cc-num");
const zip = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const exDate = document.getElementById("exp-month");
const exYear = document.getElementById("exp-year");
const username = document.getElementById("name");

//Display payment sections based on payment option selectedValue

$("select#payment option[value='credit card']").attr("selected", "selected"); // defaults on the credit card option 
$(".credit-card").show() // shows the credit field due to it being defaulted

$('#payment').on("change", function () {
   if ($(this).val() == 'credit card') {                   // if the selected value is credit card show the credit card information
    $(".credit-card").show();
  } else {
    $(".credit-card").hide();                             // if it was not selected hide it
  }
  if ($(this).val() == 'paypal') {                        // if the selected value is paypal show the first paragrapgh tag on the page
    $("p:first").show()
  } else {
    $("p:first").hide()                                   // if it was not selected hide it
  }
  if ($(this).val() == 'bitcoin') {                       // if the selected value is paypal show the last paragrapgh tag on the page
    $("p:last").show()
  } else {
    $("p:last").hide()                                     // if it was not selected hide it
  }
})

//validation function for Credit Card info.
function creditCardValidation() {
  const cardRegex = /^\d{13,16}$/;          // only accepts a number 13 - 16 digits long 
  if (cardRegex.test($('#cc-num').val())) {
    $('#cc-num').prev().text("Card Number:"); // adds the text ( Card Number: ) back when the condition is met
    $('#cc-num').prev().removeClass('errorText'); // if the condition is met removes red highlighted validation 
    $('#cc-num').removeClass('errorBox');
    return true;
  } else {
    $('#cc-num').prev().addClass('errorText');
    $('#cc-num').prev().text("Please enter a number that is between 13 and 16 digits long."); // warns the user what should be inputted 
    $('#cc-num').addClass('errorBox');
  }
}

$('#cc-num').on('focusout', (e) => { // changes due to switiching between text input fields
  creditCardValidation();
})


function zipCodeValidation() {

  const cardRegex1 = /^\d{5}$/;     // only accepts a number 5 digits long 
  if (cardRegex1.test($('#zip').val())) {
    $('#zip').prev().text("Zip Code:");
    $('#zip').prev().removeClass('errorText');
    $('#zip').removeClass('errorBox');
    return true;
  } else {
    $('#zip').prev().text("Please enter a valid zip code.")
    $('#zip').prev().addClass('errorText');
    $('#zip').addClass('errorBox');
  }
}


//Live zip code validation (calls on the function above)
$('#zip').on('focusout', (e) => {
  zipCodeValidation();
});

//Validation Function for CVV #
function finalCVVVal() {
  //if credit card 5 digits long..
  const cardRegex2 = /^\d{3}$/;
  if (cardRegex2.test($('#cvv').val())) {
    $('#cvv').prev().text("CCV:");
    $('#cvv').prev().removeClass('errorText');
    $('#cvv').removeClass('errorBox');
    return true;
  } else {
    $('#cvv').prev().text("Please enter the 3-digit CVV found on the back of the card.")
    $('#cvv').prev().addClass('errorText');
    $('#cvv').addClass('errorBox');
  }
};

//Live ccv validation
$('#cvv').on('focusout', (e) => {
  finalCVVVal();
})
function finalCVVVal2() {
  //if credit card 5 digits long..
  const cardRegex3 = /[A-Za-z]/
  if (cardRegex3.test($('#name').val())) {
    $('#name').prev().text("Name:");
    $('#name').prev().removeClass('errorText');
    $('#name').removeClass('errorBox');
    return true;
  } else {
    $('#name').prev().text("Please enter a name")
    $('#name').prev().addClass('errorText');
    $('#name').addClass('errorBox');
  }
};


$('#name').on('focusout', (e) => {
  finalCVVVal2();
})
function finalCVVVal3() {
  //if credit card 5 digits long..
  const cardRegex4 = /[A-Za-z]+@[a-zA-Z]+.[a-zA-z]+/
  if (cardRegex4.test($('#mail').val())) {
    $('#mail').prev().text("Email:");
    $('#mail').prev().removeClass('errorText');
    $('#mail').removeClass('errorBox');
    return true;
  } else {
    $('#mail').prev().text("Please enter a valid email")
    $('#mail').prev().addClass('errorText');
    $('#mail').addClass('errorBox');
  }
};


mail.addEventListener('focusout', (e) => {
  finalCVVVal3();
})

// $('form').submit(function () {
//   // $("").keyup(function() {
//     if ( $('input').val() == "") {
//         alert('Text-field is empty.');
           
//   }  
// })

// $('input[type="checkbox"]').submit(function(){
//   if($(this). prop("checked") == true){
//   alert("Checkbox is checked." );
//   }else if($(this). prop("checked") == false){
//     alert("Checkbox is unchecked." );
//   }})


  

// $('form').submit(function () {

//     // Get the Login Name value and trim it
//     const nameField = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
//     const nameField1 = /[a-zA-Z]/

//     // Check if empty of not
//     if (nameField.test($('#mail').val()) == "") {
//         alert('Text-field is empty.');;
//     } else {
      
//     }
//     if (nameField1.test($('#name').val())== "") {
//       alert('Text-field is empty.');
//       return false;
// }});




// $("#name").submit(function (e) {
//   finalCVVVal2()
//   return true;
// });


// //Email field
// function errorEmail() {
//   console.log(name);
//   const emailVal = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   //If email doesn't have any text...
//   if (email.value === "") {
//     email.previousElementSibling.classList.add('errorText');
//     email.previousElementSibling.innerText = "Oops! You forgot to enter your email.";
//     email.classList.add('errorBox');
//     //If email is correctly formatted...
//   } else if (email.value.match(emailVal)) {
//     email.previousElementSibling.textContent = "Email:";
//     email.previousElementSibling.classList.remove('errorText');
//     email.classList.remove('errorBox');
//     return true;
//     //If email is incorrectly formatted...
//   } else {
//     email.previousElementSibling.classList.add('errorText');
//     email.previousElementSibling.innerText = "Please enter a valid email address.";
//     email.classList.add('errorBox');
//     return false;
//   }
// }


$('form').on("submit", function (evt) {

  if ($("input[type='checkbox']:checked").length == 0 ) {
  
     evt.preventDefault();
     $("form submit").attr("disabled", true);

     //disable a normal button
     $("form submit").attr("disabled", true);

     
     $('checkbox').prev().text("Email:");
     $('checkbox').prev().removeClass('errorText');
     $('checkbox').removeClass('errorBox');
     
   } else {
     $('checkbox').prev().text("Please enter a valid email")
     $('checkbox').prev().addClass('errorText');
     $('checkbox').addClass('errorBox');
    //  $('#mail').prev().text("Please enter a valid email")
    //  error.style.color = "crimson"
    //  var errorContainer = document.getElementById("error-container"); // looks maybe something like this in your HTML: <div id="activities"><div id="error-container"></div></div>
    //  errorContainer.innerHTML = "<h3>Choose at least one activity.</h3>"
  return true 
  }
  })
  
    // $('#mail').prev().addClass('errorText');
    // $('#mail').addClass('errorBox');

