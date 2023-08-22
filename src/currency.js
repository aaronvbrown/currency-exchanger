export default class CurrencyExchangerCall {
  static async convertCurrency() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        const error = `${response.status} ${response.statusText}`;
        throw new Error(error);
      }
      return response.json();
    }
    catch (error) {
      return error;
    }
  }
}  