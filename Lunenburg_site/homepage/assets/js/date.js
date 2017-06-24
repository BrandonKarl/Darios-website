var d = new Date();

if(((1 <= d.getDay() && d.getDay() <= 4) && (d.getHours() >= 21 || d.getHours() < 11)) ||
	 ((5 <= d.getDay() && d.getDay() <= 6) && (d.getHours() >= 22 || d.getHours() < 11)) ||
	 ((0 == d.getDay()) && (d.getHours() >= 21 || d.getHours() < 12))) {
			document.getElementById("status").innerHTML = "Closed";
			document.getElementById("status").style.color = "Red";
}