var randomnumber1= Math.floor( Math.random() * 6 ) + 1;
var randomstring="dice" +randomnumber1 +".png";
var randomimage="images/"+randomstring;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage);
//-Second Player
var randomnumber2= Math.floor( Math.random() * 6 ) + 1;
var randomimage1="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage1);

//Announcing the results
if(randomnumber1 > randomnumber2)
{
  document.querySelector("h1").innerHTML="🚩Player1 Wins";
}
else if(randomnumber1 < randomnumber2)
{
  document.querySelector("h1").innerHTML="🚩Player2 Wins";
}
else {
  document.querySelector("h1").innerHTML="Match Draw";
}
