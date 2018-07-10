var createdTime, clickedTime, reactionTime;

function boxOrCircle(){
  if(Math.random() > 0.5){
    document.getElementById("redbox").style.borderRadius = "50%";
  }else{
    document.getElementById("redbox").style.borderRadius = "0%";
  }
}

function moveBox(){
  var top = Math.random()*300;
  var left = Math.random()*500;
  document.getElementById("redbox").style.top=top+"px";
  document.getElementById("redbox").style.left=left+"px";
}

//alert(boxOrCircle());
function randomColor(){
  var letters = '0123456789ABCDEF'.split('');
  var color = "#";
  for(var i = 0; i < 6; i++){
    color += letters[Math.round(Math.random()*15)];
  }
  return color;
}

function makeBox(){
    setTimeout(function(){
      boxOrCircle();
      moveBox();
    document.getElementById("redbox").style.backgroundColor=randomColor();
    document.getElementById("redbox").style.visibility="visible";
    createdTime = Date.now();
  }, Math.random()*5000);


}

document.getElementById("redbox").onclick=function(){
  clickedTime = Date.now();
  reactionTime = (clickedTime - createdTime)/1000;
  document.getElementById("time").innerHTML=reactionTime;
  //alert(reactionTime);
  this.style.visibility="hidden";
  //OR this.style.display="none";
  makeBox();
}



makeBox();
