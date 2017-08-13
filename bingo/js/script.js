$(document).ready(function(){
   
	var cardArray = new Array("Audible mass can opening","This customer is very unique","Nobody laughs at obvious joke attempt","Everyone contributed to this sale","Groans when state stays pink","Judy creates a new meme","Awesome customer video","Awful customer video","Barefoot presenter","Thinly veiled dig at competitor","State turns red","Touching story about sick relative","Culinary leaves","Three consecutive anniversaries with same name","A product is renamed","Someone mispronounces Cogito","Figure out the staff meeting theme","Jodel appears on the social media slide","Someone interrupts or corrects Judy","Isn't that interesting?","Did you know we have MyChart in Spanish?","Incorrect grammar lesson","Undeserved self-congratulation","Someone gets paged","Presenter fails at using clicker","Painful attempt at using memes");
   
	init();
   
	function shuffle(v){
		for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    	return v;
	};
	 
	function init(){
		shuffle(cardArray);
		for(var i = 0; i<24; i++){
			$('#cell'+i).html(cardArray[i]);
		}
	 }

	$('#newCard').click(function(){
		init();
	});
	 
	$('td').click(function(){
		var toggle = this.style;
		toggle.backgroundColor = toggle.backgroundColor? "":"#333";
		toggle.color = toggle.color? "":"#fff";
	});

 });

