function dwarfRollCall(dwarves) {
 var newStr = "";
 for(var i = 0; i < dwarves.length; i++) {
 if(i === dwarves.length-1) {
			newStr = (i+1 + ". " + dwarves[i]);
 		}else {
	newStr = (i+1 + ". " + dwarves[i] + );
   }
	}
 	return newStr;
}
 
 

function summonCaptainPlanet(planeteerCalls){
var result = [];
planeteerCalls.forEach(function(ele) {
 ele = ele.toUpperCase() + "!";
result.push(ele);
  });
   return result;
  }
  
  
  
  function longPlaneteerCalls(words) 
{
	for(var i = 0; i < words.length; i++) 
	{
		if(words[i].length > 4) {
			return true;
		}
	}
	return false;
}


  function findTheCheese (foods) 
{
 	var cheese = ["camembert", "cheddar", "gouda"];
 	for(var i = 0; i < foods.length; i++) 
 	{
 		for(var j = i; j < cheese.length; j++)
 		{
 			if(foods[i] === cheese[j]) 
 			{
 				return cheese[j];
 			}
 		}
 	}
return "no cheese!";
 }

 
 
  
