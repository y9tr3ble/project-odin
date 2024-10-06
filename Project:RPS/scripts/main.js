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

function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		console.log("Ничья!");
	} else if (
		(humanChoice === "Камень" && computerChoice === "Ножницы") ||
		(humanChoice === "Ножницы" && computerChoice === "Бумага") ||
		(humanChoice === "Бумага" && computerChoice === "Камень")
	) {
		console.log(
			"Человек победил! " + humanChoice + " побеждает " + computerChoice
		);
		humanScore++;
	} else {
		console.log(
			"Компьютер победил! " + computerChoice + " побеждает " + humanChoice
		);
		computerScore++;
	}
}

function playGame() {
	const rounds = 5;

	for (let i = 0; i < rounds; i++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
		playRound(humanSelection, computerSelection);
		console.log("Счёт: Человек " + humanScore + " Компьютер " + computerScore);
	}

	if (computerScore > humanScore) {
		console.log("Компьютер победил");
	} else if (humanScore > computerScore) {
		console.log("Человек победил");
	} else {
		console.log("Ничья");
	}
}

playGame();
