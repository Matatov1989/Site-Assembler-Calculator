function opencontext() 
{
	var lefto = screen.availWidth/2-150;
	var righto = screen.availHeight/2-125;
	window.open("Buy.html", "INFO", "width=500, height=530, left=450, top=100");
}

function opencontext1() 
{
	var lefto = screen.availWidth/2-150;
	var righto = screen.availHeight/2-125;
	window.open("Contacts.html", "INFO", "width=500, height=500, left=450, top=100");
}

setInterval(function(){cover()},4000);
function cover()
{
	var rand = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
	
	switch(rand)
	{
		case 1:
			document.getElementById('cover').src="images/rus/1.png";
			break;
		case 2:
			document.getElementById('cover').src="images/rus/2.png";
			break;
		case 3:
			document.getElementById('cover').src="images/rus/3.png";
			break;
		case 4:
			document.getElementById('cover').src="images/rus/4.png";
			break;
		case 5:
			document.getElementById('cover').src="images/rus/5.png";
			break;
		case 6:
			document.getElementById('cover').src="images/rus/6.png";
			break;
		case 7:
			document.getElementById('cover').src="images/rus/7.png";
			break;
	}
 }
 
function resize(img, x, y) 
{
	img.width = x;
    img.height = y;
}