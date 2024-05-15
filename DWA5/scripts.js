const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  try {
    result.innerText = Math.floor(dividend / divider);

    if (dividend === "" || divider === "") {
      throw "Division not performed. Both values are required in inputs. Try again";
    }
    if (dividend < 0 || divider < 0) {
      throw "Division not performed. Invalid number provided. Try again";
    }
    if (isNaN(dividend) || isNaN(divider)) {
      throw "Something critical went wrong. Please reload the page";
    }
  } catch (error) {
    if (error === "Something critical went wrong. Please reload the page") {
      document.body.innerText = error;
    } else {
      result.innerText = error;
    }
    console.log(error);
  }
});

// Scenario 1: Math.floor
// Scenario 2-4: try, throw and catch
