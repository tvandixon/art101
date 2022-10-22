/*
 * Author:Alex Jones, Jacquelyn Meek, Tristan Van Dixon
 * Created:   18.10.2023
 * License: Public Domain
 */

 // Create Array of Our Modes of Transportation
 myTransport = [" Car", " Bike", " Bus"," Scooter"];

// Create Object with information from Lab 5.
 myMainRide = {
   make: "Jeep",
   model: "Grand Cherokee",
   color: "Beige",
   year: "1999",
   age: function() {
      return 2022 - year;
   }
}

// Output
document.writeln("My Use to Moves: " + myTransport + "<br>")
document.writeln("My Car Mobile: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
