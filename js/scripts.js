$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    const city = $("#city").val();
    const color = $("#color").val();
    const animal = $("#animal").val();
 
    const string = [city, color, animal];
    const newString = [];
    newString.push(string[2]);
    newString.push(string[1]);
    newString.push(string[0]);
    
    $("#1").append(newString[1]);
    $("#2").append(newString[0]);


    
    
    

    alert(newString)
      }); 
});


