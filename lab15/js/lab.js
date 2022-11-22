/*
 * Author: Alex Jones, Jacquelyn Meek, Tristan Van Dixon
 * Created:   11.22.2022
 */

 $("#activate").click(getAPIData);


function getAPIData() {
 // Using the core $.ajax() method
  $.ajax({
    url: "http://www.yerkee.com/",
    type: "GET",
  })

  .done(function(data) {
    console.log(data);
    $("#output").html(data);
  })

  .fail(function(request,error){
    console.log(request,error);
  });
}
