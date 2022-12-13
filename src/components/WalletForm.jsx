import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies } from '../redux/actions';

class WalletForm extends Component {
  state = {
    expense: 0,
    expDescription: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCurrencies());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { expense, expDescription } = this.state;
    const { currenciesNames } = this.props;

    return (
      <div>
        <form className="exchange-form">
          <label htmlFor="expense">
            Valor:
            <input
              name="expense"
              id="expense"
              type="number"
              data-testid="value-input"
              onChange={ this.handleChange }
              value={ expense }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              name="expDescription"
              type="text"
              id="description"
              data-testid="description-input"
              onChange={ this.handleChange }
              value={ expDescription }
            />
          </label>
          <label htmlFor="currencies">
            Moeda:
            <select
              name="selectedCurrency"
              id="currencies"
              data-testid="currency-input"
            >
              {currenciesNames.map((element) => (
                <option key={ element } value={ element }>{ element }</option>
              ))}
            </select>
          </label>
          <label htmlFor="payment-method">
            Forma de pagamento:
            <select
              name="paymentMethod"
              id="payment-method"
              data-testid="method-input"
            >
              <option value="cash">Dinheiro</option>
              <option value="creditCard">Cartão de crédito</option>
              <option value="debitCard">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="expense-reason">
            Motivo:
            <select
              name="expenseReason"
              id="expense-reason"
              data-testid="tag-input"
            >
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transportation">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesNames: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currenciesNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};
