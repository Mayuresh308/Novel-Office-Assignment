/* Created src/hooks/useExchangeRates.js */
import { useEffect, useState } from 'react';
import { fetchExchangeRates } from '../api/exchangeRate';

const useExchangeRates = () => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetchExchangeRates().then(setRates);
  }, []);

  return rates;
};

export default useExchangeRates;