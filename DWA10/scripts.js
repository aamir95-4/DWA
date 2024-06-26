const MAX_NUMBER = 1000;
const MIN_NUMBER = 0;
const STEP_AMOUNT = 1;

const number = document.querySelector('[data-key="number"]');
const add = document.querySelector('[data-key="add"]');
const subtract = document.querySelector('[data-key="subtract"]');

const reset = document.querySelector('[data-key="reset"]');

const subtractHandler = () => {
  const newValue = parseInt(number.value) - STEP_AMOUNT;
  number.value = newValue;

  if (add.disabled === true) {
    add.disabled = false;
  }

  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }
};

const addHandler = () => {
  const newValue = parseInt(number.value) + STEP_AMOUNT;
  number.value = newValue;

  if (subtract.disabled === true) {
    subtract.disabled = false;
  }

  if (newValue >= MAX_NUMBER) {
    add.disabled = true;
  }
};

add.addEventListener("click", addHandler);
subtract.addEventListener("click", subtractHandler);
reset.addEventListener("click", () => (number.value = 0));
