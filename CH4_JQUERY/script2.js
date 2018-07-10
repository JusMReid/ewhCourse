var windowHeight = $(window).height();
var headerBarHeight = $(".header").height();
var containerHeight = windowHeight - headerBarHeight;
$(".option").height(containerHeight + "px");

$("li").click(function(){
  $(this).toggleClass("selected");

  var actvieDiv = $(this).html();

  $("."+actvieDiv+"DIV").toggle();

  var showingDiv = $(".option").filter(function(){
    return($(this).css("display") != "none");
  }).length;

  var width = 100/showingDiv;
  $(".options").css("width",width+"%");
});

$("#runButton").click(function(){
  $('iframe').contents().find("html").html("<style>"+$
('#cssCode').val()+"</style>"+$("#htmlCode").val());

document.getElementsByClassName('#resultFrame').contentWindow.eval($("#jsCode").val());

});
