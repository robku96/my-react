import React, { Component } from 'react';
import MyButton from '../MyButton/MyButton.js';
import Edit from '../../icons/edit.svg';
import Delete from '../../icons/delete.svg';
import mobx from 'mobx';
import { observer, inject } from "mobx-react";
import './Table.css';

const Table = inject("bookStore")(observer(
    class Table extends Component {
        constructor(props) {
            super(props);
            this.state = {
                books: [],
            }
            this.handleClick = this.handleClick.bind(this);
            this.deleteBook = this.deleteBook.bind(this);
        }

        handleClick(id) {
            this.deleteBook(id);
            this.props.bookStore.deleteBook(id);
        }

        componentWillReceiveProps() {
            setTimeout(()=>{
                this.setState({
                    books: this.props.data,
                })
            })
        }

        deleteBook(id) {
            var currentBooks = this.state.books;
            currentBooks.forEach((book) => {
                if(book.id === id){
                    currentBooks.splice(currentBooks.indexOf(book));
                }
            })
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
                                <div className="Cell" onClick={ () => this.handleClick(content.id)}>
                                    <MyButton buttonClass="RoundButton"
                                        iconClass="Icon"
                                        buttonClassClicked="Clicked"
                                        source={Edit}
                                        popupClass="Popup"
                                    />
                                </div>
                                <div className="Cell" onClick={ () => this.handleClick(content.id)}>
                                    <MyButton buttonClass="RoundButton"
                                        iconClass="Icon"
                                        buttonClassClicked="Clicked"
                                        source={Delete}
                                        popupClass="Popup"
                                    />
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