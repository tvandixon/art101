/*
 * Author: Alex Jones, Jacquelyn Meek, Tristan Van Dixon
 * Created:   1.11.2022
 * License: Public Domain
 */

  var outputEl = document.getElementById("output");

  var new1El = document.createElement("p");
  new1El.innerHTML = "The First of November";

  var new2El = document.createElement("h");
  new2El.innerHTML = "November 1st, that is today.";

  new1El.appendChild(outputEl);
  new2El.appendChild(outputEl);
