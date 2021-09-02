const result = document.querySelector("#result");
const input = document.querySelector("#input");
const erro = document.querySelector("#erro");
const calculateMultiply = () => {
  if (validationNumber(input.value)) {
    clearErrorAndResult();
    const tableMultiplyResult = createTableMultiplyResult(input.value);
    showResult(tableMultiplyResult);
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
const createTableMultiplyResult = (valueMultiply) => {
  let tableMultiplyResult = "";
  for (let indexTable = 0; indexTable <= 10; indexTable++) {
    let valueTotalMultiply = valueMultiply * indexTable;
    let lineTableMultiplyResult = `${indexTable} x ${valueMultiply} = ${valueTotalMultiply}<br>`;
    tableMultiplyResult += lineTableMultiplyResult;
  }
  return tableMultiplyResult;
};
const errorMessage = (msg) => {
  erro.style.display = "block";
  erro.innerHTML = `${msg}`;
};
const showResult = (body) => {
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
const clearInputAndResult = () => {
  clearInput();
  clearResult();
};
