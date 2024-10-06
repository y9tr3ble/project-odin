let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let result;
	let number = Math.random();

	if (number < 0.25) {
		result = "Камень";
	} else if (number > 0.75) {
		result = "Ножницы";
	} else if (number > 0.25 && number < 0.75) {
		result = "Бумага";
	}

	return result;
}

function getHumanChoice() {
	let choice;
	do {
		choice = prompt("Введите: (Ножницы; Бумага; Камень)");
		if (choice != "Ножницы" && choice != "Бумага" && choice != "Камень") {
			console.log("Введите правильное значение");
		}
	} while (choice != "Ножницы" && choice != "Бумага" && choice != "Камень");
	return choice;
}


