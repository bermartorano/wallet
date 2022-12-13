import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies, saveFormInfo, EXPENSE_SUM } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: -1,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
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

  handleClick = () => {
    const { dispatch } = this.props;
    this.setState((state) => ({
      id: state.id + 1,
    }), () => {
      dispatch(saveFormInfo(this.state))
        .then(() => dispatch({ type: EXPENSE_SUM }))
        .then(() => this.setState({
          value: '',
          description: '',
        }));
    });
  };

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const { currenciesNames } = this.props;

    return (
      <div>
        <form className="exchange-form">
          <label htmlFor="expense">
            Valor:
            <input
              name="value"
              id="expense"
              type="number"
              data-testid="value-input"
              onChange={ this.handleChange }
              value={ value }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              name="description"
              type="text"
              id="description"
              data-testid="description-input"
              onChange={ this.handleChange }
              value={ description }
            />
          </label>
          <label htmlFor="currencies">
            Moeda:
            <select
              name="currency"
              id="currencies"
              data-testid="currency-input"
              onChange={ this.handleChange }
              value={ currency }
            >
              {currenciesNames.map((element) => (
                <option key={ element } value={ element }>{ element }</option>
              ))}
            </select>
          </label>
          <label htmlFor="payment-method">
            Forma de pagamento:
            <select
              name="method"
              id="payment-method"
              data-testid="method-input"
              onChange={ this.handleChange }
              value={ method }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="expense-reason">
            Motivo:
            <select
              name="tag"
              id="expense-reason"
              data-testid="tag-input"
              onChange={ this.handleChange }
              value={ tag }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>
            Adicionar despesa
          </button>
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
