import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableRow extends Component {
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
        <td>teste9</td>
      </tr>
    );
  }
}

export default TableRow;

TableRow.propTypes = {
  expense: PropTypes.arrayOf(PropTypes.shape(PropTypes.any)).isRequired,
};
