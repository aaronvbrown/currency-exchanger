export default class CurrencyExchangerCall {
  static async getRates() {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    return response.json();
  }
}  