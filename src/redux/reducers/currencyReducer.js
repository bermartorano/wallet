import { CURR_INFO,
  QUOTATION_UPDATED,
  EXPENSE_SUM, DELETE_EXPENSE,
  EDIT_EXPENSE,
  SUBISTITUTE_EXPENSE,
} from '../actions';
// texte

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpense: 0,
  idToBeEdited: '',
  editing: false,
};

const sumExpenses = (param) => {
  const totalSum = param.reduce((acc, cur) => {
    const { exchangeRates, currency, value } = cur;
    const exchangeRate = exchangeRates[currency].ask;
    const result = exchangeRate * value;
    return acc + result;
  }, 0);
  const totalSumRounded = totalSum.toFixed(2);
  return totalSumRounded;
};

const currencyReducer = (state = INICIAL_STATE, action) => {
  const { expenses, idToBeEdited } = state;
  switch (action.type) {
  case CURR_INFO:
    return { ...state, currencies: action.currencies };
  case QUOTATION_UPDATED:
    return ({
      ...state,
      expenses: [
        ...expenses, {
          ...action.localState,
          exchangeRates: action.currInfo,
        },
      ],
    });
  case EXPENSE_SUM:
  {
    return { ...state, totalExpense: sumExpenses(expenses) };
  }
  case DELETE_EXPENSE:
  {
    const clickedExpense = expenses.find((exp) => exp.id.toString() === action.payload);
    const expensesCopied = [...expenses];
    const indexToRemove = expensesCopied.indexOf(clickedExpense);
    expensesCopied.splice(indexToRemove, 1);

    return ({
      ...state,
      expenses: expensesCopied,
      totalExpense: sumExpenses(expensesCopied),
    });
  }
  case EDIT_EXPENSE:
    return { ...state, idToBeEdited: action.payload, editing: true };

  case SUBISTITUTE_EXPENSE:
  {
    const expensesCopied = [...expenses];
    const editedExp = expenses.find((e) => e.id.toString() === idToBeEdited.toString());
    const indexToEdit = expenses.indexOf(editedExp);
    expensesCopied[indexToEdit] = {
      ...expenses[indexToEdit],
      ...action.localState,
      id: +idToBeEdited,
    };
    return { ...state, editing: false, expenses: expensesCopied };
  }
  default:
    return state;
  }
};

export default currencyReducer;
