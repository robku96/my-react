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
      this.props.bookStore.isPopupShown = true;
    }

    render() {
      const { isPopupShown } = this.props.bookStore;
      return (
        <div className="Footer">
          {isPopupShown ? (
            <BookPopup />
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
