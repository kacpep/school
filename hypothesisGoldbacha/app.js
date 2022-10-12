let number = parseInt(prompt("Podaj liczbę całkowitą (parzystą): "));
let arryaOddNumber = [2];

if (number % 2 != 0) {
	alert("Nie jest to liczba parzysta.");
} else {
	for (let i = 2; i <= number; i++) {
		if (i % 2 != 0) {
			let flag = false;
			for (let x = 2; x < i; x++) {
				if (i % x == 0) {
					flag = true;
				}
			}
			if (flag == false) {
				arryaOddNumber.push(i);
			}
		}
	}
	for (let i = 0; number > i; i++) {
		let result;

		result = number - arryaOddNumber[i];

		if (arryaOddNumber.includes(result)) {
			alert(result + " + " + arryaOddNumber[i] + " = " + number);
			break;
		}
	}
}
