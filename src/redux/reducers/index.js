import { combineReducers } from 'redux';
import userReducer from './user';
import currencyReducer from './currencyReducer';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootReducer = combineReducers({
  user: userReducer,
  wallet: currencyReducer,
});

export default rootReducer;
