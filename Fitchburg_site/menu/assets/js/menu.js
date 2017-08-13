// When click menubutton, make it red, hide pizza adn drinks
$("#menubutton").on("click", function() {
	document.getElementById('drinks').style.display = 'none'
	document.getElementById('menu').style.display = 'block'

	document.getElementById('drinksbutton').style.backgroundColor = 'white'
	document.getElementById('drinksbutton').style.color = 'black'


	document.getElementById('menubutton').style.backgroundColor = '#B21509'
	document.getElementById('menubutton').style.color = 'white'
});

// When click drinksbutton, make it red, hide pizza adn menu
$("#drinksbutton").on("click", function() {
	document.getElementById('menu').style.display = 'none'

	document.getElementById('drinks').style.display = 'block'

	document.getElementById('drinksbutton').style.backgroundColor = '#B21509'
	document.getElementById('drinksbutton').style.color = 'white'


	document.getElementById('menubutton').style.backgroundColor = 'white'
	document.getElementById('menubutton').style.color = 'black'
});
