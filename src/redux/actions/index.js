import fetchCurrencies from '../../services/currencyApi';

export const SAVE_EMAIL = 'SaveUserEmail';
export const LOADING_STARTED = 'isLoading';
export const CURR_INFO = 'currInfoReceived';

export const addEmail = (userEmail) => ({
  type: SAVE_EMAIL,
  payload: userEmail,
});

export const startLoading = () => ({
  type: LOADING_STARTED,
});

export const currenciesReceived = (currInfo) => {
  const { USDT, ...currenciesWithoutUSDT } = currInfo;
  const currenciesNames = Object.keys(currenciesWithoutUSDT);

  return ({
    type: CURR_INFO,
    currencies: currenciesNames,
  });
};

export const getCurrencies = () => (
  async (dispatch) => {
    dispatch(startLoading());

    const currenciesInfo = await fetchCurrencies();

    dispatch(currenciesReceived(currenciesInfo));
  });
