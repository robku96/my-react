import React, { Component } from 'react';
import MyButton from '../MyButton/MyButton.js';
import BookPopup from '../BookPopup/BookPopup.js';
import Edit from '../../icons/edit.svg';
import Delete from '../../icons/delete.svg';
import * as mobx from 'mobx'
import { observer, inject } from "mobx-react";
import './Table.css';

const Table = inject("bookStore")(observer(
    class Table extends Component {
        constructor(props) {
            super(props);
            this.state = {
                books: [],
            }
            this.handleClickDelete = this.handleClickDelete.bind(this);
            this.deleteBook = this.deleteBook.bind(this);
        }

        handleClickEdit(index) {
            console.log(index);
            this.props.bookStore.fetchBook(index);
            this.props.bookStore.bookPopup = {
                title: "Edit book",
                idBook: index,
                isPopupShown: true,
                action: "edit"
            };
        }

        handleClickDelete(id) {
            this.deleteBook(id);
            this.props.bookStore.deleteBook(id);
        }

        componentWillReceiveProps() {
            setTimeout(() => {
                this.setState({
                    books: this.props.data,
                })
            })
        }

        deleteBook(id) {
            var currentBooks = this.state.books;
            currentBooks.forEach((book) => {
                if (book.id === id) {
                    currentBooks.splice(currentBooks.indexOf(book), 1);
                    console.log("usunieto:", book.id);
                }
            });
            this.setState({
                books: currentBooks,
            })
        }

        render() {
            return (
                <div className="Table">
                    <div className="Header"> {
                        this.props.headers.map((title, index) => {
                            return <div key={index} className="Cell">{title}</div>;
                        })}
                    </div> {
                        this.state.books.map((content, index) => {
                            return <div key={index} className="Row">{
                                Object.values(content).map((obj, index) => {
                                    if (mobx.isObservableArray(obj)) {
                                        return <div key={index} className="Cell">{
                                            obj.map((item, index) => {
                                                return <div key={index} className="item">{item}</div>
                                            })}
                                        </div>
                                    }
                                    return <div key={index} className="Cell">{obj}</div>
                                })
                            }
                                <div className="Cell" onClick={() => this.handleClickEdit(content.id)}>
                                    <MyButton className="Edit">
                                        <img src={Edit} className="Icon" alt="edit" />
                                    </MyButton>
                                </div>
                                <div className="Cell">
                                    <MyButton className="Delete" onClick={() => this.handleClickDelete(content.id)}>
                                        <img src={Delete} className="Icon" alt="delete" />
                                    </MyButton>
                                </div>
                            </div>
                        })
                    }
                </div>
            )
        }
    }
))

export default Table;