import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangerCall from './currency';

// Business Logic
async function getCurrencyExchange() {
  try {
    const response = await CurrencyExchangerCall.convertCurrency();
    if (response instanceof Error){
      const errorMessage = `There was a problem with the API:  ${response.message}`;
      throw new Error(errorMessage);
    }
    return response;
  }
  catch(error){
    printError();
  }
}

//UI Logic

function printResults(amount, currency) {
  document.querySelector("#results").innerText = `${amount} in USD is worth ${100} in ${currency}`;
}

function printError(error) {
  document.getElementById("results").innerText = error.message;
}

function handleFormSubmission(event) {
  event.preventDefault();
  let conversions = getCurrencyExchange;
  console.log(conversions);
  let usdAmount = document.querySelector("#inputAmountUSD");
  let targetCurrency = document.querySelector("#currencyChooser");
  let results = document.querySelector("#results")
  printResults(usdAmount, targetCurrency);  
  results.removeAttribute("class");
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission)
})