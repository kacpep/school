let number = prompt("Podaj liczbę:");
let allNumbers = [];
let Up = 0;
let result = "To jest liczba wesoła!";

if (!isNaN(parseInt(number))) {
	allNumbers.push(parseInt(number));
	while (Up != 1) {
		let arrayDigits = number.split("");
		Up = 0;
		for (i in arrayDigits) {
			Up += Math.pow(parseInt(arrayDigits[i]), 2);
		}
		if (allNumbers.indexOf(Up) > -1) {
			result = (" Nie jest to liczba wesoła! ");
			break;
		}
		allNumbers.push(Up);
		number = Up.toString();
	}
	alert(
		result
		
	);
} else {
	alert("ERROR: To nie jest liczba!");
}
