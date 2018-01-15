import React, { Component } from 'react';
import Footer from '../Footer/Footer.js';
import Table from '../Table/Table.js';
import { observer, inject } from "mobx-react";
import './Content.css';

const Content = inject("bookStore", "authorStore")(observer(
  class Content extends Component {
    headersBook = [
      'Id',
      'Title',
      'Authors',
      'Publication year',
      'Publishing house',
      'Pages',
      'Price',
      'Edit',
      'Delete'
    ];

    headersAuthors = [
      'Id',
      'Name',
      'Surname',
      'Date of birth',
      'Adress',
      'Phone',
      'Books',
      'Edit',
      'Delete'
    ]

    componentDidMount() {
      this.props.bookStore.fetchBookList();
      this.props.authorStore.fetchAuthorList();
    }

    render() {
      const { isBooksTable, isAuthorsTable } = this.props.bookStore;
      return (
        <div className="Content">
          {isBooksTable ? (
            <Table headers={this.headersBook} data={this.props.bookStore.books} />
          ) : (
              isAuthorsTable ? (<Table headers={this.headersAuthors} data={this.props.authorStore.authors} />) : (null)
            )}
          <Footer />
        </div>
      );
    }
  }
))

export default Content;
