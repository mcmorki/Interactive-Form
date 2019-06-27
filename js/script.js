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

const regex = /^\d{3}$/;
const regex1 = /^\d{5}$/;
const regex2 = /^\d{13,16}$/;

const regexValidation = (regex, errorMessage) => {
  return $input => {
    const validInput = regex.test($input.val());
    if (!validInput) {
      throw new error(errorMessage);
    }
  }
}


const vaildFunction = () => [
  {
    input: '#cc-num',
    validation: [
      regexValidation(/^\d{13,16}/, "error")
    ],
    runif: $('#payment').val() === 'credit card'
  },
  {
    input: '#zip',
    validation: [
      regexValidation(/^\d{5}$/, "error")
    ],
    runif: $('#payment').val() === 'credit card'
  },
  {
    input: '#cvv',
    validation: [
      regexValidation(/^\d{3}$/, "error")
    ],
    runif: $('#payment').val() === 'credit card'
  }]
















// function showOrHideTip(show, element) {
//   // show element when show is true, hide when false
//   if (show) {
//     element.style.display = "inherit";
//   } else {
//     element.style.display = "none";
//   }
//   // ]
//   // vaildFunction();
//   const usernameInput = document.getElementByName("user_name");
//   // const vaildFunction = () => [

//   function isValidUsername(username) {
//     return /[^a-z$]+/.test(username);
//   }
//   usernameInput.addEventListener("input", e => {
//     const text = e.target.value;
//     const valid = isValidUsername(text);
//     const showTip = text !== "" && !valid;
//     const tooltip = e.target.nextElementSibling;
//     showOrHideTip(showTip, tooltip);
//   });
//   usernameInput.addEventListener("input", createListener(isValidUsername));
// } 
// showOrHideTip(usernameInput, valid)