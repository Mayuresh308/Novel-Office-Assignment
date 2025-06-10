/* Updated src/api/exchangeRate.js */
const API_KEY = 'YOUR_EXCHANGERATE_API_KEY';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/INR`;

export const fetchExchangeRates = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.conversion_rates || {};
  } catch (err) {
    console.error('Error fetching exchange rates:', err);
    return {};
  }
};