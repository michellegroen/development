window.onload = function() {

	countDown();

	function countDown() {
		var verjaardag = new Date(2018, 7, 16);
		var heden = new Date();
		var milliseconden = verjaardag - heden;

		var dagen = Math.floor(milliseconden / (1000 * 60 * 60 * 24));
		var uren = Math.floor((milliseconden % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minuten = Math.floor((milliseconden % (1000 * 60 * 60)) / (1000 * 60));
		var seconden = Math.floor((milliseconden % (1000 * 60)) / 1000);




		console.log(Math.ceil(seconden));
		document.getElementById("demo").innerHTML = dagen + "dagen " + uren + "uren " + minuten + "minuten " + seconden + "seconden ";
	}
	setInterval(countDown, 1000);
}

/*window.onload = function() {

	countDown();

	function countDown() {
		var verjaardag = new Date(2018, 7, 16);
		var heden = new Date();
		var milliseconden = verjaardag - heden;

		var seconden = milliseconden / 1000;
		var minuten = seconden / 60;
		var uren = minuten / 60;
		var dagen = uren / 24;

		console.log(Math.ceil(seconden));
		document.getElementById("demo").innerHTML = Math.floor(seconden);
	}
	setInterval(countDown, 1000);
}
*/