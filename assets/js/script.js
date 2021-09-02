const result = document.querySelector("#result");
const input = document.querySelector("#input");
const error = document.querySelector("#erro");
const calculateMultiply = () => {
  if (validationNumber(input.value)) {
    clearErrorAndResult();
    const multiplicationResult = createMultiplicationsResults(input.value);
    showMultiplicationsResults(multiplicationResult);
  }
};
const validationNumber = (num) => {
  if (num >= 1 && num <= 10) return true;
  if (!num.length) {
    errorMessage("Please fill in the field.");
  } else {
    errorMessage("Please fill in numbers between 1 and 10.");
  }
  clearInputAndResult();
};
const createMultiplicationsResults = (multiplicationValue) => {
  let multiplicationsResults = "";
  for (let indexTable = 0; indexTable <= 10; indexTable++) {
    let multiplicationResult = multiplicationValue * indexTable;
    let lineMultiplicationResult = `${indexTable} x ${multiplicationValue} = ${multiplicationResult}<br>`;
    multiplicationsResults += lineMultiplicationResult;
  }
  return multiplicationsResults;
};
const errorMessage = (msg) => {
  error.style.display = "block";
  error.innerHTML = `${msg}`;
};
const showMultiplicationsResults = (body) => {
  result.style.display = "block";
  result.innerHTML = body;
  clearInput();
};
const clearInput = () => (input.value = "");
const clearResult = () => (result.innerHTML = "");
const clearError = () => errorMessage("");
const clearInputAndResult = () => {
  clearInput();
  clearResult();
};
const clearErrorAndResult = () => {
  clearError();
  clearResult();
};
