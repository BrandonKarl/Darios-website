var d = new Date();

if(((d.getDay() === 1 || d.getDay() === 7 || d.getDay() === 2) || (d.getHours() >= 21 || d.getHours() < 16)) ||{
			document.getElementById("status").innerHTML = "Closed";
			document.getElementById("status").style.color = "White";
}
