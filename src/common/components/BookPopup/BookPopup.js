import React, { Component } from 'react';
import MyButton from '../MyButton/MyButton.js';
import { observer, inject } from "mobx-react";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './BookPopup.css';

const BookPopup = inject("bookStore")(observer(
    class BookPopup extends Component {
        constructor(props) {
            super(props);
            this.state = {
                selectedOption: null
            }
            this.handleClick = this.handleClick.bind(this);
        }

        handleChange = (selectedOption) => {
            this.setState({ selectedOption });
        }

        handleClick() {
            this.props.bookStore.isPopupShown = false;
        }

        render() {
            return (
                <div className="Popup">
                    <h1>Add new book</h1>
                    <br></br>
                    <label className="Label">Tytuł: </label>
                    <input className="Input" type="text"></input>
                    <label className="Label">Autor: </label>
                    <Select
                        name="form-field-name"
                        multi={true}
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={[
                            { label: 'One', value: 'frr', },
                            { label: 'Two', value: 'two' },
                        ]}
                    />
                    <label className="Label">Rok wydania: </label>
                    <input className="Input" type="text"></input>
                    <label className="Label">Wydawnictwo: </label>
                    <input className="Input" type="text"></input>
                    <label className="Label">Ilość stron: </label>
                    <input className="Input" type="text"></input>
                    <label className="Label">Cena: </label>
                    <input className="Input" type="text"></input>
                    <div className="buttonsForm">
                        <MyButton className="Cancel" onClick={this.handleClick}>Cancel</MyButton>
                        <button className="Add">Add</button>
                    </div>
                </div>
            )
        }
    }
))

export default BookPopup;