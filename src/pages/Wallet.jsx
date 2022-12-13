import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    const { email, totalExpense } = this.props;

    return (
      <div>
        <p className="title">TrybeWallet</p>
        <header className="header">
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">{ `${totalExpense}` }</p>
          <p data-testid="header-currency-field">Moeda: BRL</p>
        </header>
        <WalletForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpense: state.wallet.totalExpense,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpense: PropTypes.string.isRequired,
};
