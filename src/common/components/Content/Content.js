import React, { Component } from 'react';
import Footer from '../Footer/Footer.js';
import Table from '../Table/Table.js';
import { observer, inject } from "mobx-react";
import './Content.css';

const Content = inject("bookStore","authorStore")(observer(
  class Content extends Component {
    headers = [
      'Id',
      'Title',
      'Authors',
      'Publication year',
      'Publishing house',
      'Pages',
      'Price',
      'Edit',
      'Delete'
    ]

    componentWillMount(){
      this.props.bookStore.fetchBookList();
    }

    render() {
      return (
        <div className="Content">
          <Table headers={this.headers} data={this.props.bookStore.books} />
          <Footer />
        </div>
      );
    }
  }
))

export default Content;
