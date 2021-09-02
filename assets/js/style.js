const result = document.querySelector("#result");
const input = document.querySelector("#input");
const erro = document.querySelector("#erro");
const calculateMultiplyResult = () => {
  if (validationNumber(input.value)) {
    clearErrorAndResult();
    const multiplyResult = generateListMultiplyResult(input.value);
    const bodyResult = generateBodyMultiplyResult(multiplyResult);
    showResult(bodyResult);
  }
};
const validationNumber = (num) => {
  if (num >= 1 && num <= 10) return true;
  if (!num.length) {
    errorMessage("Please fill in the field.");
  } else {
    errorMessage("Please fill in numbers between 1 and 10.");
  }
};
const generateListMultiplyResult = (valueMultiply) => {
  const listResultMultiply = [];

  for (let indexTable = 0; indexTable <= 10; indexTable++) {
    let valueTotal = valueMultiply * indexTable;
    const objectMultiply = {
      indexTable,
      valueMultiply,
      valueTotal,
    };
    listResultMultiply.push(objectMultiply);
  }

  return listResultMultiply;
};
const generateBodyMultiplyResult = (listResultMultiply) => {
  let bodyResult = "";

  listResultMultiply.forEach(({ indexTable, valueMultiply, valueTotal }) => {
    bodyResult += `${indexTable} x ${valueMultiply} = ${valueTotal}<br>`;
  });

  return bodyResult;
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
const clearErrorAndResult = () => {
  clearError();
  clearResult();
};
