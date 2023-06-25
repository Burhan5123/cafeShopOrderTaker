window.onload=initfunction;

function initfunction()
{
	var current_datetime = new Date()
	var formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()

	document.getElementById("datetoday").innerHTML = formatted_date;
}

function totalprice()
{

	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var phonenumber = document.getElementById("number").value;
	var pickuptime = document.getElementById("pickupdate").value;
	var totalprice = parseFloat(0);
	var margherita = parseInt(document.getElementById("margherita").value);
	var maggi = parseInt(document.getElementById("maggi").value);
	var capricciosa = parseInt(document.getElementById("capricciosa").value);
	var schnitzel = parseInt(document.getElementById("schnitzel").value);
	var mixedgrill = parseInt(document.getElementById("mixedgrill").value);
	var bigbeef = parseInt(document.getElementById("bigbeef").value);
	var coffee = parseInt(document.getElementById("coffee").value);
	var latte = parseInt(document.getElementById("latte").value);
	var drinks = parseInt(document.getElementById("drink").value);
	var displaymessage = "";
	var message = "";

	var margheritavalue = parseFloat(0);
	var maggivalue = parseFloat(0);
	var capricciosavalue = parseFloat(0);
	var schnitzelvalue = parseFloat(0);
	var mixedgrillvalue = parseFloat(0);
	var bigbeefvalue = parseFloat(0);
	var coffeevalue = parseFloat(0);
	var lattevalue = parseFloat(0);
	var drinksvalue = parseFloat(0);

	if(margherita>0){
		margheritavalue = margherita * 12.00;
		totalprice += margheritavalue;
		message = (margherita + " margherita     $" + margheritavalue.toFixed(2) + "<br>");
	}
	if(maggi>0){
		maggivalue = maggi * 12.50;
		totalprice += maggivalue;
		message += (maggi + " Quattro Formaggi     $" + maggivalue.toFixed(2) + "<br>");
	}
	if(capricciosa>0){
		capricciosavalue = capricciosa * 13.00;
		totalprice += capricciosavalue;
		message += (capricciosa + " Capricciosa     $" + capricciosavalue.toFixed(2) + "<br>");
	}
	if(schnitzel>0){
		schnitzelvalue = schnitzel * 8.50;
		totalprice += schnitzelvalue;
		message += (schnitzel + " schnitzel     $" + schnitzelvalue.toFixed(2) + "<br>");
	}
	if(mixedgrill>0){
		mixedgrillvalue = mixedgrill * 9.50;
		totalprice += mixedgrillvalue;
		message += (mixedgrill + " Mixed Grill     $" + mixedgrillvalue.toFixed(2) + "<br>");
	}
	if(bigbeef>0){  
		bigbeefvalue = bigbeef * 10.00;
		totalprice += bigbeefvalue;
		message += (bigbeef + " Big Beef on a Bun     $" + bigbeefvalue.toFixed(2) + "<br>");
	}
	if(coffee>0){
		coffeevalue = coffee * 2.00;
		totalprice += coffeevalue;
		message += (coffee + " Coffee    $" + coffeevalue.toFixed(2) + "<br>");
	}
	if(latte>0){
		lattevalue = latte * 2.50;
		totalprice += lattevalue;
		message += (latte + " Latte     $" + lattevalue.toFixed(2) + "<br>");
	}
	if(drinks>0){
		drinksvalue = drinks * 1.75;
		totalprice += drinksvalue;
		message += (drinks + " Soft drink     $" + drinksvalue.toFixed(2) + "<br>");
	}
	displaymessage = ("Name: " + firstname + " " + lastname +"<br> Phone Number: " + phonenumber + "<br> Pick up: " + pickuptime + "<br><br>" + message + " <br> Total price:    $" + totalprice.toFixed(2)); 
	document.getElementById("result").innerHTML = displaymessage;

}
