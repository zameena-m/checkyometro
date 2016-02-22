var dailyRides;
var weeklyRides;
var totalSpent;

function metrocardCalc(){

	dailyRides = document.getElementById("dailyrides").value;
	weeklyRides = document.getElementById("weeklyrides").value;
	totalSpent = dailyRides * weeklyRides * 4 * 2.75;
	alert("$ " + totalSpent + 
		" is how much you currently spend per month on Metrocards!");
	investNow();
}

function investNow(){
	if (totalSpent > 116) {
	alert("You're better off buying an unlimited monthly card!");
	} else {
			alert("Right on! No need to buy an unlimited card this month!")
	}
}