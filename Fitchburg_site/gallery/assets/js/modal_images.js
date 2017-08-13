// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('imgm');
var modalImg = document.getElementById("img01");

//Event listeners for photos
for(var i = 0; i < img.length; i++) {
	img[i].onclick = function()	{
			document.getElementsByClassName("navbar-inverse")[0].style.opacity = "0.1";
			document.getElementsByClassName("navbar-inverse")[0].style.pointerEvents = "none";
	    modal.style.display = "block";
	    modalImg.src = this.src;
	}
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  document.getElementsByClassName("navbar-inverse")[0].style.opacity = "1";
  document.getElementsByClassName("navbar-inverse")[0].style.pointerEvents = "auto";
}