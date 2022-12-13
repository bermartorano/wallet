import { LOADING_STARTED, CURR_INFO } from '../actions';

const INICIAL_STATE = {
  currencies: [],
};

const currencyReducer = (state = INICIAL_STATE, action) => {
  const { type, currencies } = action;
  switch (type) {
  case LOADING_STARTED:
    return { ...state };

  case CURR_INFO:
    return { ...state, currencies };

  default:
    return state;
  }
};

export default currencyReducer;
