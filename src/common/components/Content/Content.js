import React, { Component } from 'react';
import Footer from '../Footer/Footer.js';
import Table from '../Table/Table.js';
import { observer, inject } from "mobx-react";
import './Content.css';

const Content = inject("bookStore")(observer(
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

    componentWillMount(){
      this.props.bookStore.fetchBookList();
    }

    render() {
      return (
        <div className="Content">
          <Table headers={this.headers} data={this.props.bookStore.books}/>
          <Footer />
        </div>
      );
    }
  }
))

export default Content;
