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

}

setInterval(countDown, 1000);