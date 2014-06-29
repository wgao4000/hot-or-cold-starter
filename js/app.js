
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});
    
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});
var counter=0;
var inputnumber=0;
var randomvalue=0;
var diff=0;
function gennum(){
    randomvalue=randomIntFromInterval(1,100);
    document.getElementById("count").innerHTML=0;
    document.getElementById("feedback").innerHTML="Make your Guess!";
    document.getElementById("userGuess").value="";
    document.getElementById('guessList').innerHTML="";
    counter=0;
}
function  guessfu(inputnumber){
	if(inputnumber>100 || inputnumber<1)
		alert("Please enter a number between 1 and 100");
	else{
	  var feedbackinfo="";
	    if(Math.abs(inputnumber-randomvalue)>=50)
	        feedbackinfo="ice cold";
      else if(Math.abs(inputnumber-randomvalue)<50 && Math.abs(inputnumber-randomvalue)>30)
            feedbackinfo="cold";
      else if(Math.abs(inputnumber-randomvalue)<=30 && Math.abs(inputnumber-randomvalue)>20)
         	feedbackinfo="warm";
      else if(Math.abs(inputnumber-randomvalue)<=20 && Math.abs(inputnumber-randomvalue)>10)
    	    feedbackinfo="hot";
      else if(Math.abs(inputnumber-randomvalue)<=10 && Math.abs(inputnumber-randomvalue)>0)
    	    feedbackinfo="very hot";
      else if(Math.abs(inputnumber-randomvalue)==0)
    	    feedbackinfo="You're correct";
      if((diff-Math.abs(inputnumber-randomvalue))>0 &&counter>0 && Math.abs(inputnumber-randomvalue)!=0)
      	    feedbackinfo="Warmer";
      else if((diff-Math.abs(inputnumber-randomvalue))<0 &&counter>0 && Math.abs(inputnumber-randomvalue)!=0)
      	    feedbackinfo="Colder";
      counter++;
      diff=Math.abs(inputnumber-randomvalue);
      document.getElementById("count").innerHTML=counter;
      document.getElementById("feedback").innerHTML=feedbackinfo;
      $('#guessList').append('<li>'+inputnumber+'</li>');
    }  
}
function randomIntFromInterval(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}



