/*
 * Author: Alex Jones, Jacquelyn Meek, Tristan Van Dixon
 * Created:   11.13.2022
 */

//print numbers 1 to 200

$("#outputButton").click(function(){
for (var num = 1; num <= 200; num++) {
//set 3, 5, and 7 multiple string
  if (num % 105 == 0) {
  var str = "";
  str = "FizzBuzzBoom!";
    }
//set 5 and 7 multiple string
  else if (num % 35 == 0) {
  str = "FizzBoom!";
  }
//set 3 and 7 multiple string
  else if (num % 21 == 0) {
  str = "BuzzBoom!";
  }
//set 3 and 5 multiple string
  else if (num % 15 == 0) {
  str = "FizzBuzz!";
  }
//set 3 multiple string
  else if (num % 3 == 0) {
  str = "Buzz!";
  }
//set 5 multiple string
  else if (num % 5 == 0) {
  str = "Fizz!";
  }
//set 7 multiple string
  else if (num % 7 == 0) {
  str = "Boom!";
  }
//set any number outside of mutiples to print normally.
  else {
  str = num;
  }
    $("#output").append("<p>" + str + "</p>");
}
});
