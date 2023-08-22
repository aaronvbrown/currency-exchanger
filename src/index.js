import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangerCall from './currency';

// Business Logic
async function getCurrencyExchange() {
  try {
    const response = await CurrencyExchangerCall.convertCurrency();
    console.log(response);
    if (response.result instanceof Error){
      const errorMessage = `There was a problem with the API:  ${response.message}`;
      throw new Error(errorMessage);
    }
    return response.conversion_rates; //maybe just call printResults here instead?
  }
  catch(error){
    printError(error);
  }
}

//UI Logic

function printResults(amount, currency, conversionRate) {
  console.log("line28",conversionRate) // problem
  document.querySelector("#results").innerText = `${amount} in USD is worth ${amount * conversionRate} in ${currency}`;
}

function printError(error) {
  document.querySelector("#results").innerText = error.message;
}


function handleFormSubmission(event) {
  event.preventDefault();
  let usdAmount = document.querySelector("#inputAmountUSD").value;
  let targetCurrency = document.querySelector("#currencyChooser").value;
  let results = document.querySelector("#results")
  let conversions = getCurrencyExchange(); //promise

  conversions.then((res) => {
    //res is big API response obj --res.["EUR"]
    const rate = res[targetCurrency];
    
    printResults(usdAmount, targetCurrency, rate)
  })
  results.removeAttribute("class");
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission)
})