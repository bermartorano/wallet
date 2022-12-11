import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    loginButtonDisabled: true,
  };

  loginButtonValidation = () => {
    const passwordMinLength = 5;
    const { email, password } = this.state;

    const passwordValid = password.length > passwordMinLength;
    const emailSupp = email.split('.com')[email.split('.com').length - 1];
    const emailEndsCorrectly = emailSupp === '';
    const emailContains = email.includes('@');
    const correctFirstLetterEmail = email[0] !== '@';
    const validation = passwordValid
      && emailEndsCorrectly
      && emailContains
      && correctFirstLetterEmail;

    this.setState({
      loginButtonDisabled: !validation,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.loginButtonValidation);
  };

  handleClick = () => {
    const { email } = this.state;
    const { dispatch, history } = this.props;

    dispatch(addEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, loginButtonDisabled } = this.state;

    return (
      <div>
        <p>Faça seu Login!</p>
        <input
          type="text"
          name="email"
          data-testid="email-input"
          placeholder="exemplo@exemplo.com"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="Digite sua senha"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          name="loginButton"
          disabled={ loginButtonDisabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Login);

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape(PropTypes.any.isRequired).isRequired,
};
