

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
var check0 = $("input[name='all']")
let $total = 0;

// checkStatus function watches the state of the activities selected 
function checkStatus() {

  $total = 0

  if (check1.is(':checked')) {
    $total += 100
    check2.prop('disabled', true);              //If js-frameworks is selected add $100 to total and disable the express option
  } else {                                      // else do not disable express if js-frameworks wasnt selected
    check2.prop('disabled', false);
  }
  if (check2.is(':checked')) {
    $total += 100
    check1.prop('disabled', true)               //If express is selected add $100 to total  disable the js-frameworks option
  } else {                                      // else do not disable js-frameworks if express wasnt selected
    check1.prop('disabled', false);
  }

  if (check3.is(':checked')) {
    $total += 100
    check4.prop('disabled', true);              //If js-libs is selected add $100 to total  disable the node option
  } else {                                      // else do not disable node if js-libs wasnt selected
    check4.prop('disabled', false);
  }
  if (check4.is(':checked')) {
    $total += 100
    check3.prop('disabled', true)                //If node is selected add $100 to total disable the js-libs option
  } else {                                       // else do not disable  js-libs if node wasnt selected
    check3.prop('disabled', false);
  }
  if (check5.is(':checked')) {                   //If build-tools is selected add $100 to total
    $total += 100
  }
  if (check6.is(':checked')) {                   //If npm is selected add $100 to total
    $total += 100
  }
  if (check0.is(':checked')) {                   //If main conference is selected add $200 to total
    $total += 200
  }

  $('.totalDiv').removeClass('is-hidden');       // hides total amount 

  $('.total-display').html('Total: $' + parseInt($total)); // shows total amount of items selected
};

// listens when each item is clicked 
check1.add(check2).add(check3).add(check4).add(check5).add(check6).add(check0).on('click', checkStatus);

$('.activities').append('<div class="totalDiv"><label name="total-amount" class="total-display">Total: </label></div>');
$('.totalDiv').addClass('is-hidden');

// hides all options before a payment selection
$(".credit-card").hide();
$("p:first").hide();
$("p:last").hide()

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
  } else {          // warns the user what should be inputted including a red highlighted box
    $('#cc-num').prev().addClass('errorText');
    $('#cc-num').prev().text("Please enter a number that is between 13 and 16 digits long.");
    $('#cc-num').addClass('errorBox');
  }
}

$('#cc-num').on('focusout', (e) => { // active when swtiching between text input fields
  creditCardValidation();
})


function zipCodeValidation() {

  const cardRegex1 = /^\d{5}$/;     // only accepts a number 5 digits long 
  if (cardRegex1.test($('#zip').val())) {
    $('#zip').prev().text("Zip Code:"); // adds the text ( Zip Code: ) back when the condition is met
    $('#zip').prev().removeClass('errorText');// if the condition is met removes red highlighted validation 
    $('#zip').removeClass('errorBox');
    return true;
  } else {                // warns the user what should be inputted including a red highlighted box
    $('#zip').prev().text("Please enter a valid zip code.")
    $('#zip').prev().addClass('errorText');
    $('#zip').addClass('errorBox');
  }
}

$('#zip').on('focusout', (e) => {   // active when swtiching between text input fields
  zipCodeValidation();
});


function cvvValidation() {

  const cardRegex2 = /^\d{3}$/;   // only accepts a number 3 digits long 
  if (cardRegex2.test($('#cvv').val())) {
    $('#cvv').prev().text("CCV:");  // adds the text ( CCV: ) back when the condition is met
    $('#cvv').prev().removeClass('errorText');// if the condition is met removes red highlighted validation 
    $('#cvv').removeClass('errorBox');
    return true;
  } else {           // warns the user what should be inputted including a red highlighted box
    $('#cvv').prev().text("Please enter the 3-digit CVV found on the back of the card.")
    $('#cvv').prev().addClass('errorText');
    $('#cvv').addClass('errorBox');
  }
};


$('#cvv').on('focusout', (e) => {   // active when swtiching between text input fields
  cvvValidation();
})
function nameValidation() {

  const cardRegex3 = /[A-Za-z]/   // only accepts upper case and lower care letters
  if (cardRegex3.test($('#name').val())) {
    $('#name').prev().text("Name:");   // adds the text ( Name: ) back when the condition is met
    $('#name').prev().removeClass('errorText'); // if the condition is met removes red highlighted validation 
    $('#name').removeClass('errorBox');
    return true;
  } else {                        // warns the user what should be inputted including a red highlighted box
    $('#name').prev().text("Please enter a name")
    $('#name').prev().addClass('errorText');
    $('#name').addClass('errorBox');
  }
};

$('#name').on('focusout', (e) => {    // active when swtiching between text input fields
  nameValidation();
})
function emailValidation() {
  //if credit card 5 digits long..
  const cardRegex4 = /[A-Za-z]+@[a-zA-Z]+.[a-zA-z]+/    // only accepts example: example@gmail.com
  if (cardRegex4.test($('#mail').val())) {
    $('#mail').prev().text("Email:");             // adds the text ( Email: ) back when the condition is met
    $('#mail').prev().removeClass('errorText');   // if the condition is met removes red highlighted validation 
    $('#mail').removeClass('errorBox');
    return true;
  } else {                         // warns the user what should be inputted including a red highlighted box
    $('#mail').prev().text("Please enter a valid email")
    $('#mail').prev().addClass('errorText');
    $('#mail').addClass('errorBox');
  }
};

$('#mail').on('focusout', (e) => {    // active when swtiching between text input fields
  emailValidation();
})

function checkBoxValidation() {
  //if credit card 5 digits long..

    if (!!$("input[type='checkbox']:checked")) {
      //your code in case of NOT checked
      // $( "<p>Choose at least one activity</p>" ).insertAfter( '.activities legend' )
      $('.activities legend').text("Choose at least one activity")            // adds the text ( Email: ) back when the condition is met
      $('.activities legend' ).addClass('errorText');   // if the condition is met removes red highlighted validation 
      $('.fieldset activities').addClass('errorBox');
         
      return true
      

    } else {   $("input[type='checkbox']:checked")
    $('.activities legend' ).removeClass('errorText');   // if the condition is met removes red highlighted validation 
    $('.fieldset activities').removeClass('errorBox');
                           // warns the user what should be inputted including a red highlighted box
    //   $( "<p>Choose at least one activity</p>" ).insertAfter( '.activities legend' )
    //   ('.activities p').addClass('errorText');
    //   ('.fieldset activities').addClass('errorBox');
    // }

    }
  }   // only accepts example: example@gmail.com
//   if (cardRegex4.test($('#mail').val())) {
//     $('#mail').prev().text("Email:");             // adds the text ( Email: ) back when the condition is met
//     $('#mail').prev().removeClass('errorText');   // if the condition is met removes red highlighted validation 
//     $('#mail').removeClass('errorBox');
//     return true;
//   } else {                         // warns the user what should be inputted including a red highlighted box
//     $('#mail').prev().text("Please enter a valid email")
//     $('#mail').prev().addClass('errorText');
//     $('#mail').addClass('errorBox');
//   }
// };

$("input[type='checkbox']:checked").on('change', (e) => {    // active when swtiching between text input fields
  checkBoxValidation();
})



$('form').on("submit", function (evt) {   // will not submit unless one activity is selected

  if (!!(emailValidation() & cvvValidation() & zipCodeValidation() & creditCardValidation() & nameValidation() & checkBoxValidation())) {
    // evt.preventDefault(); 
    
    return true;
  }

  // emailValidation() & cvvValidation() & zipCodeValidation() & creditCardValidation() 

  evt.preventDefault();
  // $("form submit").attr("disabled", true);


  // $("form submit").attr("disabled", true);

  // // $('checkbox').prev().text("Email:");
  // // $('checkbox').prev().removeClass('errorText');
  // // $('checkbox').removeClass('errorBox');
  // // $('checkbox').prev().text("Please enter a valid email")
  // // $('checkbox').prev().addClass('errorText');
  // // $('checkbox').addClass('errorBox');
  
  // $(".activites").replace().parent().text('Choose at least one activity').addClass('errorText')


  // $('.activities').addClass('errorBox', 'errorText')

  //  error.style.color = "crimson"
  //  var errorContainer = document.getElementById("error-container"); // looks maybe something like this in your HTML: <div id="activities"><div id="error-container"></div></div>
  //  errorContainer.innerHTML = "<h3>Choose at least one activity.</h3>"
  // return true

}
)



