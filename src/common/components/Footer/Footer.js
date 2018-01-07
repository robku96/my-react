import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

import MyButton from '../MyButton/MyButton.js';
import BookPopup from '../BookPopup/BookPopup.js';
import Add from '../../icons/add.svg';

import './Footer.css';

const Footer = inject("bookStore")(observer(
  class Footer extends Component {
    constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      const bookPopup = {
        title: "Add new book",
        id: null, 
        isPopupShown: true
      }
      this.props.bookStore.bookPopup = bookPopup;
    }

    render() {
      const { isPopupShown } = this.props.bookStore.bookPopup;
      return (
        <div className="Footer">
          {isPopupShown ? (
            <BookPopup title={this.props.bookStore.bookPopup.title} id={this.props.bookStore.bookPopup.idBook}/>
          ) : (
              <MyButton className="RoundButton" onClick={this.handleClick}>
                <img src={Add} className="Icon" alt="icon" />
              </MyButton>
            )}
        </div>
      );
    }
  }
))

export default Footer;
