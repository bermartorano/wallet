const currencyApi = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrencies = async () => {
  const fetchedCurrencies = await fetch(currencyApi);
  const currenciesObj = await fetchedCurrencies.json();
  return currenciesObj;
};

export default fetchCurrencies;
