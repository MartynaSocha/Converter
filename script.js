const converter = document.querySelector("#converter");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");

// change label

const swap = () => {
	if (one.textContent == "°C") {
		one.textContent = "°F";
		two.textContent = "°C";
		result.textContent = ""; //clear result for estetic view
	} else {
		one.textContent = "°C";
		two.textContent = "°F";
		result.textContent = ""; //clear result for estetic view
	}
};

changeBtn.addEventListener("click", swap);

//function for change C to F

const celToFahr = () => {
	const fahrenheit = converter.value * 1.8 + 32;
	result.textContent =
		converter.value + "°C to " + fahrenheit.toFixed(1) + "°F";
	converter.value = ""; //clear input for estetic view
};

//function for change F to C

const fahrToCel = () => {
	const celsius = (converter.value - 32) / 1.8;
	result.textContent = converter.value + "°F to " + celsius.toFixed(1) + "°C";
	converter.value = ""; //clear input for estetic view
};

//function that select C or F

const conversion = () => {
	if (converter.value !== "") {
		if (one.textContent === "°C") {
			celToFahr();
		} else {
			fahrToCel();
		}
	} else {
		result.textContent = "Musisz podać jakąś wartość";
	}
};

const reset = () => {
	converter.value = "";
	result.textContent = "";
};

convBtn.addEventListener("click", conversion);
resetBtn.addEventListener("click", reset);
