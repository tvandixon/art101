

//create event when hovering over navbar. Show div of navigation tips.
$('.navbar').hover(function() {
  $(".tip-nav").css("visibility", "visible");
}, function() {
  $(".tip-nav").css("visibility", "hidden");
});

//create event when hovering over phone. Show div of phone tip.
$('#userPhone').hover(function() {
  $(".tip-phone").css("visibility", "visible");
}, function() {
  $(".tip-phone").css("visibility", "hidden");
});

//link statements pop up to person icon.
$("#slugStatementsButton").click(function() {
  $("#slugSlideShow").toggle("fast", "swing");
});

//link phone toggle to phone icon.
$("#phone").click(function() {
  $("#userPhone").toggle();
});

//link get started button to affiliation page.
$("#getStarted").click(function() {
  $(".chooseAffiliation").toggle("fast");
});

//link "learn More" button to Team Page.
$("#learnMore").click(function() {
  $(".aboutUs").toggle("fast");
});

//link affiliation page button to phone home page.
$("#confirmAffliation").click(function() {
  $(".phoneHome").toggle("fast");
});

//Collect and print user chosen affiliation.
function displayUserAffiliation() {
  var selectedCollege = document.getElementsByName('affiliation');
  for (i = 0; i < selectedCollege.length; i++) {
    if (selectedCollege[i].checked)
      document.getElementById("printAffiliation").innerHTML = selectedCollege[i].value;
  }
}

//Establish scaling animation when hovering over each pin.
//pin 1 animation
$('#pin1').hover(function() {
  $(this).css("transform", "scale(1.4, 1.4)", "rotate(15deg)");
}, function() {
  $(this).css("transform", "none");
});

//pin 2 animation
$('#pin2').hover(function() {
  $(this).css("transform", "scale(1.4, 1.4)");
}, function() {
  $(this).css("transform", "none");
});

//pin 3 animation
$('#pin3').hover(function() {
  $(this).css("transform", "scale(1.4, 1.4)");
}, function() {
  $(this).css("transform", "none");
});

//pin 4 animation
$('#pin4').hover(function() {
  $(this).css("transform", "scale(1.4, 1.4)");
}, function() {
  $(this).css("transform", "none");
});

//pin 5 animation
$('#pin5').hover(function() {
  $(this).css("transform", "scale(1.4, 1.4)");
}, function() {
  $(this).css("transform", "none");
});

//pin 6 animation
$('#pin6').hover(function() {
  $(this).css("transform", "scale(1.4, 1.4)");
}, function() {
  $(this).css("transform", "none");
});

//pin 7 animation
$('#pin7').hover(function() {
  $(this).css("transform", "scale(1.4, 1.4)");
}, function() {
  $(this).css("transform", "none");
});

//pin 8 animation
$('#pin8').hover(function() {
  $(this).css("transform", "scale(1.4, 1.4)");
}, function() {
  $(this).css("transform", "none");
});

//Connect pins to respective sticky note pop-ups.
$("#pin1").hover(function() {
  $("#pinInfo1").css("visibility", "visible");
}, function() {
  $("#pinInfo1").css("visibility", "hidden");
});

$("#pin2").hover(function() {
  $("#pinInfo2").css("visibility", "visible");
}, function() {
  $("#pinInfo2").css("visibility", "hidden");
});

$("#pin2").click(function() {
  $(".rock").css("visibility", "visible");
});

$("#backarrow2").click(function() {
  $(".rock").css("visibility", "hidden");
});

$("#pin3").hover(function() {
  $("#pinInfo3").css("visibility", "visible");
}, function() {
  $("#pinInfo3").css("visibility", "hidden");
});

$("#pin3").click(function() {
  $(".wishing").css("visibility", "visible");
});

$("#backarrow2").click(function() {
  $(".wishing").css("visibility", "hidden");
});

$("#pin4").hover(function() {
  $("#pinInfo4").css("visibility", "visible");
}, function() {
  $("#pinInfo4").css("visibility", "hidden");
});

$("#pin4").click(function() {
  $(".meadows").css("visibility", "visible");
});

$("#backarrow2").click(function() {
  $(".meadows").css("visibility", "hidden");
});

$("#pin5").hover(function() {
  $("#pinInfo5").css("visibility", "visible");
}, function() {
  $("#pinInfo5").css("visibility", "hidden");
});

$("#pin5").click(function() {
  $(".eden").css("visibility", "visible");
});

$("#backarrow2").click(function() {
  $(".eden").css("visibility", "hidden");
});

$("#pin6").hover(function() {
  $("#pinInfo6").css("visibility", "visible");
}, function() {
  $("#pinInfo6").css("visibility", "hidden");
});

$("#pin6").click(function() {
  $(".squiggle").css("visibility", "visible");
});

$("#backarrow1").click(function() {
  $(".squiggle").css("visibility", "hidden");
});

$("#pin7").hover(function() {
  $("#pinInfo7").css("visibility", "visible");
}, function() {
  $("#pinInfo7").css("visibility", "hidden");
});

$("#pin7").click(function() {
  $(".caves").css("visibility", "visible");
});

$("#backarrow2").click(function() {
  $(".caves").css("visibility", "hidden");
});

$("#pin8").hover(function() {
  $("#pinInfo8").css("visibility", "visible");
}, function() {
  $("#pinInfo8").css("visibility", "hidden");
});

$("#pin8").click(function() {
  $(".koi").css("visibility", "visible");
});

$("#backarrow2").click(function() {
  $(".koi").css("visibility", "hidden");
});
