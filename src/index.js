// selectors and event listeners for calculator
const calcKeys = document.querySelectorAll('.calc-key');
calcKeys.forEach((key) => key.addEventListener('click', updateNum));
calcKeys.forEach((key) => key.addEventListener('click', addOperationToDisplay));

// initialize global variables
let currentNum = '';
let previousNum = '';
let operator = null;

let display = 0;
let displayDiv = document.querySelector('.display');
let displayText = displayDiv.textContent;

//display function
function addOperationToDisplay(e) {
	const numKey = Array.from(document.querySelectorAll('.calc-key'));
	let numKeyText = numKey
		.map((key) => key.innerHTML)
		.includes(e.target.textContent);

	if (numKeyText === '+' || numKeyText === '-' || numKeyText === 'C') {
		// add in function for tracking operator
	} else {
		display = e.target.textContent;
		displayDiv.innerHTML = display;
		return display;
	}
}

// update numbers for calculations
function updateNum(e) {
	const numberText = e.target.innerText;
	currentNum += numberText;
	console.log(currentNum);
}

// operator function

// calculation function

// erase function
