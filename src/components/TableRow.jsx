import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense, editExpense } from '../redux/actions';

class TableRow extends Component {
  clickToAdd = ({ target }) => {
    const { dispatch } = this.props;
    dispatch(deleteExpense(target.id));
  };

  clickToEdit = ({ target }) => {
    const { dispatch } = this.props;
    dispatch(editExpense(target.id));
  };

  render() {
    const {
      expense:
        {
          currency,
          description,
          exchangeRates,
          method,
          tag,
          value,
          id,
        },
    } = this.props;

    const { name, ask } = exchangeRates[currency];
    const convertedValueRouded = (ask * value).toFixed(2);

    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{parseFloat(value).toFixed(2)}</td>
        <td>{name}</td>
        <td>{parseFloat(ask).toFixed(2)}</td>
        <td>{convertedValueRouded}</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ this.clickToAdd }
            id={ id }
          >
            Excluir
          </button>
          <button
            type="button"
            data-testid="edit-btn"
            onClick={ this.clickToEdit }
            id={ id }
          >
            Editar
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(TableRow);

TableRow.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expense: PropTypes.arrayOf(PropTypes.shape(PropTypes.any)).isRequired,
};
