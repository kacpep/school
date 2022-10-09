let finalyNumber, attainableNumber, pluse,number = prompt("Podaj liczbę:");;

for (let i = 1; finalyNumber != number; i++) {
	let arrayDigits = i.toString().split("");
	attainableNumber = i;
	pluse = 0;
	finalyNumber = attainableNumber;
	for (let digits in arrayDigits) {
		finalyNumber += parseInt(arrayDigits[digits]);
		pluse += parseInt(arrayDigits[digits]);
	}

	if (attainableNumber >= number) {
		result = "Ta liczba nie jest osiągalna.";
		break;
	}

	result =
		"Podana liczba: " +
		number +
		" Liczba osiągalna: " +
		attainableNumber +
		" s(k) = " +
		pluse;
}

alert(result);
