$(function(){
// content to be added
var content = "<p style='color:red'>You can add me anywhere in the DOM using different jQuery methods!</p>'";
var content2 = "You can add me anywhere in the DOM using different jQuery methods!";
var content3 = "HA HA HA HA HA";

// append
$("#append-example").append(content);
// prepend 
$("#prepend-example").prepend(content);

$("#before-example").before(content3);
 
$("#after-example").after(content3);
// html 
$('#html-example').html(content);

// text 
$('#text-example').text(content2);


});