import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <div>
        TrybeWallet
        <header>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">Despesa total: 0</p>
          <p data-testid="header-currency-field">Moeda: BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};