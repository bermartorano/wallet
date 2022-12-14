import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableRow from './TableRow';

class Table extends Component {
  render() {
    const { expenses } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th scope="col" className="header-row">Descrição</th>
            <th scope="col" className="header-row">Tag</th>
            <th scope="col" className="header-row">Método de pagamento</th>
            <th scope="col" className="header-row">Valor</th>
            <th scope="col" className="header-row">Moeda</th>
            <th scope="col" className="header-row">Câmbio utilizado</th>
            <th scope="col" className="header-row">Valor convertido</th>
            <th scope="col" className="header-row">Moeda de conversão</th>
            <th scope="col" className="header-row">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => <TableRow key={ exp.id } expense={ exp } />)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (globalState) => ({
  expenses: globalState.wallet.expenses,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape(PropTypes.any)).isRequired,
};
