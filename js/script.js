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


// var activityClass = $(".activities")
// var listOfActivities = activityClass.length
// let total = 0;
// $(<p></p>).text('Total:)


const mainConferenceValue = $('input[name="all"]').val("200")
let $total = 0;



// $("input.js-frameworks", this)
// console.log($("input.js-frameworks", this))

// // const printTotal = document.createElement('h3');
// // printTotal.innerText = <p></p> + total 
// $('.activities').append('Total Cost ')
// checkStatus function watches the state of the activities selected 
function checkStatus() {
 
  $total = 0

  if (check1.is(':checked')) {
    $total += 200
    check2.prop('disabled', true);              //If js-frameworks is selected disable the express option
  } else {                                    // else do not disable express if js-frameworks wasnt selected
    check2.prop('disabled', false);
  }
  if (check2.is(':checked')) {
    $total += 100
    check1.prop('disabled', true)                                           //If express is selected disable the js-frameworks option
  } else {                                      // else do not disable js-frameworks if express wasnt selected
    check1.prop('disabled', false);
  }

  if (check3.is(':checked')) {
    check4.prop('disabled', true);              //If js-libs is selected disable the node option
  } else {                                      // else do not disable node if js-libs wasnt selected
    check4.prop('disabled', false);
  }
  if (check4.is(':checked')) {
    check3.prop('disabled', true)                 //If node is selected disable the js-libs option
  } else {                                        // else do not disable  js-libs if node wasnt selected
    check3.prop('disabled', false);
  }
  if (check5.is(':checked')) {
    $total += 100
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


const activityType = document.querySelector('.activities');
$('.activities').append('<div class="totalDiv"><label name="total-amount" class="total-display">Total: </label></div>');
$('.totalDiv').addClass('is-hidden');
//const mainConferenceValue = $('input[name="all"]').val("200")
const restOfActivities = $('input[name="("js-frameworks"),("js-libs"),("express"),("node),("build-tools"),("npm")"]').val(100)



//2. Calculate and display totals










$(".credit-card").hide();


$('#payment').on("change", function () {
  if ($(this).val() == 'credit card') {
    $(".credit-card").show();
  } else {
    $(".credit-card").hide();
  }
});






// // //   const activityExpenses = () => {
// // //     // list of prices
// // //     const prices = [200, 100, 100, 100, 100, 100, 100];
// // //     let total = 0;
// // //     // every check box add its list price if it's checked
// // //     for (let i = 0; i < choices.length; i++) {
// // //       total += choices[i].firstChild.checked ? prices[i] : 0;
// // //     }}

// // //   activityExpenses.addEventListener('click')
// // const totalActivities = document.createElement("div")

// // activities.appendChild(totalActivities)

// //

// //   const regex = "{[Tuesday 9am-12pm, $100/$}]+}";  // Must be declared outside the while expression, 
// //                            // and must include the global "g" flag.

// // let result;
// // while(result = regex.exec(targetText)) {
// //   // Do something with result[0].
// // } 



// //   // const disableChoice = (el, bool) => {
// //   //   if (bool) {
// //   //     el.firstChild.disabled = true;
// //   //     el.style.color = 'grey';
// //   //     el.firstChild.checked = false;
// //   //   } else {
// //   //     el.firstChild.disabled = false;
// //   //     el.style.color = 'black';
// //   //   }
// //   }
// //   if ($(this).val() === "all") {
// //     // disable node 4
// //     disableChoice(choices[4], e.target.checked);
// //   }
// //   } else if ($(this).val() || "js-frameworks", "express") {
// //     // disable js-libs 2
// //     disableChoice(choices[2], e.target.checked);
// //   } else if ($(this).val() === "js-lib") {
// //     // disable Express 3
// //     disableChoice(choices[3], e.target.checked);
// //   } else if ($(this).val() === "express") {
// //     // disable js-frameworks 1
// //     disableChoice(choices[1], e.target.checked);
// //   }else if ($(this).val() === "node") {
// //     // disable js-libs 2
// //     disableChoice(choices[2], e.target.checked);
// //    } else if ($(this).val() === "build-tools") {
// //       // disable js-libs 2
// //       disableChoice(choices[2], e.target.checked);
// //    }   else if ($(this).val() === "npm") {
// //     // disable js-libs 2
// //     disableChoice(choices[2], e.target.checked);




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
//       // The workshop checkboxes



//     if (jsFrameworks.checked == true) {
//       express.disabled = true;
//       expressLabel.style.color = "grey";
//       totalCost += 100;
//   } else if (express.checked == true) {
//       jsFrameworks.disabled = true;
//       jsFrameworksLabel.style.color = "grey";
//       totalCost += 100;
//   }

//   if (jsLibs.checked == true) {
//       node.disabled = true;
//       nodeLabel.style.color = "grey";
//       totalCost += 100;
//   } else if (node.checked == true) {
//       jsLibs.disabled = true;
//       jsLibsLabel.style.color = "grey";
//       totalCost += 100;
//   }

//   // Update the cost each time a workshop is selected
//   document.getElementById("totalcost").innerHTML = "Total: $ " + totalCost;

//   // If a workshop that conflicted with another is deselected, reenable the disabled, conflicting workshop
//   if (jsFrameworks.checked == false) {
//       express.disabled = false;
//       expressLabel.style.color = "black";
//   }

//   if (express.checked == false) {
//       jsFrameworks.disabled = false;
//       jsFrameworksLabel.style.color = "black";
//   }

//   if (jsLibs.checked == false) {
//       node.disabled = false;
//       nodeLabel.style.color = "black";
//   }

//   if (node.checked == false) {
//       jsLibs.disabled = false;
//       jsLibsLabel.style.color = "black";
//   }

// $(document).ready(function (e) {
//   $("input").change(function(){
//     var totalCost = 0
//     $("input[type='checkbox']").each(function () {
//       totalCost = totalCost + parseInt($(this).val());
//     })
//     $("input[name='npm']").val(totalCost)
//     console.log(totalCost)
//   })

// })

