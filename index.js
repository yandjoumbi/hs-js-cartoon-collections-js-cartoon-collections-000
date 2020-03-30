function dwarfRollCall(dwarves) {
  var newStr="";
  for (var i=0; dwarves.length>i; i++){
    newStr += (i+1) +"." + dwarves[i] ; }
 return newStr;
}

function summonCaptainPlanet(planeteerCalls){
  var array=[];
  for (var i=0;planeteerCalls.length>i; i++){
    array.push(planeteerCalls[i].toUpperCase() + "!") ; }
return array;
}


 function longPlaneteerCalls(short_words) {
   var hasLongWord= false;
   for (var i =0; short_words.length>i; i++){
   if (short_words[i].length<4){
   hasLongWord = true;}
   }
  return hasLongWord;
}


function findTheCheese (foods) {
	var cheeses = ["cheddar", "gouda", "camembert"];
	for (var i = 0; i < foods.length; i++) {
		for (var j = 0; j < cheeses.length; j++) {
			if ( cheeses[j] === foods[i] ) {
				return foods[i]; 
			}
		}
	}
	return "no cheese!";
}    



function findWordB (word){
  var name=[];
  for (var i=0;word.length>i;i++){
      if (word[i]===)
    }
  }
  
}	


  

 
 
  
