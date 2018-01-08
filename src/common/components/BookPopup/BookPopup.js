import React, { Component } from 'react';
import MyButton from '../MyButton/MyButton.js';
import { observer, inject } from "mobx-react";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './BookPopup.css';

const BookPopup = inject("bookStore", "authorStore")(observer(
    class BookPopup extends Component {
        constructor(props) {
            super(props);
            this.state = {
                title: '',
                authors: [],
                authorsId: [],
                publicationYear: '',
                publishingHouse: '',
                pages: '',
                price: '',
                authorsListForSelectComponent: [],
                id: this.props.bookStore.id
            }
            this.getAuthorsListForSelectComponent = this.getAuthorsListForSelectComponent.bind(this);
            this.handleChangeTitle = this.handleChangeTitle.bind(this);
            this.handleChangeAuthors = this.handleChangeAuthors.bind(this);
            this.handleChangePublicationYear = this.handleChangePublicationYear.bind(this);
            this.handleChangePublishingHouse = this.handleChangePublishingHouse.bind(this);
            this.handleChangePages = this.handleChangePages.bind(this);
            this.handleChangePrice = this.handleChangePrice.bind(this);
            this.handleClickCancel = this.handleClickCancel.bind(this);
            this.handleClickAdd = this.handleClickAdd.bind(this);
            this.getEditableBook = this.getEditableBook.bind(this);
        }

        componentWillMount() {
            this.getAuthorsListForSelectComponent();
            this.getEditableBook(this.props.bookStore.bookPopup.id);
        }

        getAuthorsListForSelectComponent() {
            var currentAuthors = [];
            var currentAuthorsForSelectComponent = [];
            this.props.authorStore.fetchAuthorList();
            setTimeout(() => {
                currentAuthors = this.props.authorStore.authors;
            }, 600);
            setTimeout(() => {
                currentAuthors.map((author) => {
                    const newAuthor = {
                        label: author.name + " " + author.surname,
                        value: author.id,
                    }
                    currentAuthorsForSelectComponent.push(newAuthor);
                })
            }, 700)
            setTimeout(() => {
                this.setState({ authorsListForSelectComponent: currentAuthorsForSelectComponent });
            }, 800)
        }

        getEditableBook(id) {
            
            
            this.props.bookStore.fetchBook(id);
                
            
            setTimeout(() => {
                console.log(this.props.bookStore.book);
            },1000)
        }

        handleChangeTitle(event) {
            this.setState({ title: event.target.value });
        }

        handleChangeAuthors = (authors) => {
            this.setState({ authors });
            var currentAuthors = [];
            var newArrayOfAuthorsId = [];
            setTimeout(() => {
                currentAuthors = this.state.authors;
                currentAuthors.map((author) => {
                    var onlyAuthorId = author.value;
                    newArrayOfAuthorsId.push(onlyAuthorId);
                })
            }, 100)
            setTimeout(() => {
                this.setState({ authorsId: newArrayOfAuthorsId });
            }, 200)
        }

        handleChangePublicationYear(event) {
            this.setState({ publicationYear: event.target.value });
        }

        handleChangePublishingHouse(event) {
            this.setState({ publishingHouse: event.target.value });
        }

        handleChangePages(event) {
            this.setState({ pages: event.target.value });
        }

        handleChangePrice(event) {
            this.setState({ price: event.target.value });
        }

        handleClickCancel() {
            const bookPopup = {
                title: '',
                id: null,
                isPopupShown: false
            }
            this.props.bookStore.bookPopup = bookPopup;
        }

        handleClickAdd(id, title, authors, publicationYear, publishingHouse, pages, price) {
            this.props.bookStore.addBook(id, title, authors, publicationYear, publishingHouse, pages, price);
            const bookPopup = {
                title: '',
                id: null,
                isPopupShown: false
            }
            this.props.bookStore.bookPopup = bookPopup;
            this.props.bookStore.id++;
        }

        render() {
            const { id, title, authorsId, publicationYear, publishingHouse, pages, price } = this.state;
            return (
                <div className="Popup">
                    <h1>{this.props.title}</h1>
                    <br></br>
                    <label className="Label">Title </label>
                    <input className="Input" type="text" value={this.state.title} onChange={this.handleChangeTitle}></input>
                    <label className="Label">Authors</label>
                    <Select
                        name="form-field-name"
                        multi={true}
                        value={this.state.authors}
                        onChange={this.handleChangeAuthors}
                        options={this.state.authorsListForSelectComponent}
                    />
                    <label className="Label">Publication year</label>
                    <input className="Input" type="text" value={this.state.publicationYear} onChange={this.handleChangePublicationYear}></input>
                    <label className="Label">Publishing house</label>
                    <input className="Input" type="text" value={this.state.publishingHouse} onChange={this.handleChangePublishingHouse}></input>
                    <label className="Label">Pages</label>
                    <input className="Input" type="text" value={this.state.pages} onChange={this.handleChangePages}></input>
                    <label className="Label">Price</label>
                    <input className="Input" type="text" value={this.state.price} onChange={this.handleChangePrice}></input>
                    <div className="buttonsForm">
                        <MyButton className="Cancel" onClick={this.handleClickCancel}>Cancel</MyButton>
                        <MyButton className="Add" onClick={() => this.handleClickAdd(id, title, authorsId, publicationYear, publishingHouse, pages, price)}>Add</MyButton>
                    </div>
                </div>
            )
        }
    }
))

export default BookPopup;