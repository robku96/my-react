import React, { Component } from 'react';
import Footer from '../Footer/Footer.js';
import Table from '../Table/Table.js';
import './Content.css';

class Content extends Component {
  headers = [
    'Tytuł',
    'Autor',
    'Rok wydania',
    'Wydawnictwo',
    'Ilość stron',
    'Cena',
    'Edytuj',
    'Usuń'
  ]

  render() {
    return (
      <div className="Content">
          <Table headers={this.headers}/>
          <Footer />
      </div>
    );
  }
}

export default Content;
