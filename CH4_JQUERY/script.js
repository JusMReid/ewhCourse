$("#validationForm").submit(function(event){
  event.preventDefault();

  var errorMessage = "";
  function isValidEmailAddress(emailAddress) {


    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
  }

  if(! isValidEmailAddress($("#emailInput").val())){
    errorMessage += "Invalid Email Address !";
  }

  if(! $.isNumeric($("#phoneInput").val())){
    errorMessage += "<br/> Invalid Phone Number Format !";
  }

  if($("#passwordInput").val() != $("#ConfirmPasswordInput").val()){
    errorMessage += "<br/> Passwords Do Not Match!";
  }

  $(".errorDiv").html(errorMessage);

  if(errorMessage == ""){
    alert("Success");
  }
});

$("#dragMe").draggable();
$("#resizeMe").resizable();

$("#targetDiv").droppable({
  drop: function(ui, event){
    $(this).css("background-color", "red");
  }
});

$("#accordion").accordion();
$("#myList").sortable();
/**
var regex = /great/;
//var regex = /e/g   g stands for global
var string="Regex is great";

var res = string.match(regex);

//alert(res);


$("#greenCircle").click(function(){
  $(this).animate({
    width:"375px",
    height:"150px",
    marginTop:"100%"
  },1500);
});

$.get("test.html", function(data){
  alert(data);
});

$.ajax({
  url:"test.html"
}), done(function(data){
  $("h1").html(data);
  $("h1").append("appended data");
  //alert(data);
});



$("#redSquare").click(function(){
  $("iframe").attr("src","images/nyg.jpg");
});

$("#redSquare2").mouseover(function(){
  $(this).css("background-color", "blue");
});

$("#redSquare2").mouseover(function(){
  $(this).css("background-color", "blue");
});

$("#greenCircle").click(function(){
  $("#text").html("haha");
})

function fader(){
  setTimeout($("#greenCircle").fadeOut(3000),4000);
  $("#greenCircle").fadeIn(3000);
};

$("#greenCircle").click(fader());

$("div").click(function(){
  $(this).css("display", "none");
  $("#redSquare").fadeOut();
  //$(this).hide();
});

$("#noText").click(function(){
  $("p").fadeOut(4000);
});

$("#yesText").click(function(){
  $("p").fadeIn();
});
*/
