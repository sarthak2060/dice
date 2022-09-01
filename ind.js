var x= Math.floor(Math.random() * 6)+1;
var y="images/dice"+x+".png";
document.querySelectorAll("img")[0].setAttribute("src",y);
var x1= Math.floor(Math.random() * 6)+1;
var y1="images/dice"+x1+".png";
document.querySelectorAll("img")[1].setAttribute("src",y1);
if(x>x1){
  document.querySelector("h1").innerHTML="1 wins";
}else{
  document.querySelector("h1").innerHTML="2 wins";
}
