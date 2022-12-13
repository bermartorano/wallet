import { CURR_INFO, QUOTATION_UPDATED, EXPENSE_SUM } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpense: 0,
};

const currencyReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case CURR_INFO:
    return { ...state, currencies: action.currencies };

  case QUOTATION_UPDATED:
    return ({
      ...state,
      expenses: [
        ...state.expenses, {
          ...action.localState,
          exchangeRates: action.currInfo,
        },
      ],
    });

  case EXPENSE_SUM:
  {
    const totalSum = state.expenses.reduce((acc, cur) => {
      const { exchangeRates, currency, value } = cur;
      const exchangeRate = exchangeRates[currency].ask;
      const result = exchangeRate * value;
      return acc + result;
    }, 0);
    const totalSumRounded = totalSum.toFixed(2);
    return { ...state, totalExpense: totalSumRounded };
  }

  default:
    return state;
  }
};

export default currencyReducer;
