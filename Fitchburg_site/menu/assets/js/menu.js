// When click menubutton, make it red, hide pizza adn drinks
$("#menubutton").on("click", function() {
	document.getElementById('pizza').style.display = 'none'
	document.getElementById('drinks').style.display = 'none'
	document.getElementById('menu').style.display = 'block'

	document.getElementById('drinksbutton').style.backgroundColor = 'white'
	document.getElementById('drinksbutton').style.color = 'black'

	document.getElementById('pizzabutton').style.backgroundColor = 'white'
	document.getElementById('pizzabutton').style.color = 'black'

	document.getElementById('menubutton').style.backgroundColor = '#B21509'
	document.getElementById('menubutton').style.color = 'white'
});

// When click pizzabutton, make it red, hide menu adn drinks
$("#pizzabutton").on("click", function() {
	document.getElementById('menu').style.display = 'none'
	document.getElementById('drinks').style.display = 'none'
	document.getElementById('pizza').style.display = 'block'

	document.getElementById('drinksbutton').style.backgroundColor = 'white'
	document.getElementById('drinksbutton').style.color = 'black'

	document.getElementById('pizzabutton').style.backgroundColor = '#B21509'
	document.getElementById('pizzabutton').style.color = 'white'

	document.getElementById('menubutton').style.backgroundColor = 'white'
	document.getElementById('menubutton').style.color = 'black'
});

// When click drinksbutton, make it red, hide pizza adn menu
$("#drinksbutton").on("click", function() {
	document.getElementById('menu').style.display = 'none'
	document.getElementById('pizza').style.display = 'none'
	document.getElementById('drinks').style.display = 'block'

	document.getElementById('drinksbutton').style.backgroundColor = '#B21509'
	document.getElementById('drinksbutton').style.color = 'white'

	document.getElementById('pizzabutton').style.backgroundColor = 'white'
	document.getElementById('pizzabutton').style.color = 'black'

	document.getElementById('menubutton').style.backgroundColor = 'white'
	document.getElementById('menubutton').style.color = 'black'
});