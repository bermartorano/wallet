import fetchCurrencies from '../../services/currencyApi';

export const SAVE_EMAIL = 'SaveUserEmail';
export const CURR_INFO = 'currInfoReceived';
export const QUOTATION_UPDATED = 'QUOTATION_UPDATED';
export const EXPENSE_SUM = 'EXPENSE_SEM';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const addEmail = (userEmail) => ({
  type: SAVE_EMAIL,
  payload: userEmail,
});

export const currenciesReceived = (currInfo) => {
  const { USDT, ...currenciesWithoutUSDT } = currInfo;
  const currenciesNames = Object.keys(currenciesWithoutUSDT);

  return ({
    type: CURR_INFO,
    currencies: currenciesNames,
  });
};

export const saveCurrenciesInfo = (currInfo, localState) => ({
  type: QUOTATION_UPDATED,
  currInfo,
  localState,
});

export const getCurrencies = () => (
  async (dispatch) => {
    const currenciesInfo = await fetchCurrencies();
    dispatch(currenciesReceived(currenciesInfo));
  }
);

export const saveFormInfo = (localState) => (
  async (dispatch) => {
    const currenciesInfo = await fetchCurrencies();
    dispatch(saveCurrenciesInfo(currenciesInfo, localState));
  }
);

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});
