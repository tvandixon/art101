

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

//link favorites pop up to heart icon.
$("#favorites").click(function() {
  $("#userFavorites").toggle("fast", "swing");
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
$("#pin1").click(function() {
  $("#pinInfo1").toggle("fast", "swing");
});

$("#pin2").click(function() {
  $("#pinInfo2").toggle("fast", "swing");
});

$("#pin3").click(function() {
  $("#pinInfo3").toggle("fast", "swing");
});

$("#pin4").click(function() {
  $("#pinInfo4").toggle("fast", "swing");
});

$("#pin5").click(function() {
  $("#pinInfo5").toggle("fast", "swing");
});

$("#pin6").click(function() {
  $("#pinInfo6").toggle("fast", "swing");
});

$("#pin7").click(function() {
  $("#pinInfo7").toggle("fast", "swing");
});

$("#pin8").click(function() {
  $("#pinInfo8").toggle("fast", "swing");
});
