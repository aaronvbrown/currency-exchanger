import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangerCall from './currency';

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


function printError(error) {
  document.getElementById("resultsDiv").innerText = error.message;
}

console.log(getCurrencyExchange);
// function handleFormSubmission(currency) {
//   currency.preventDefault();
//   let newCurrency = document.getElementById("results")
// }

// window.addEventListener("load", function() {
//   document.querySelector("form").addEventListener("submit", handleFormSubmission)
// })