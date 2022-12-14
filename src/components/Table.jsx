import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div>
        <table>
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
        </table>
      </div>
    );
  }
}

export default Table;
