import React, { Component } from 'react';
import MyButton from '../MyButton/MyButton.js';
import Add from '../../icons/add.svg'; 
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
          <MyButton source={Add} />
      </div>
    );
  }
}

export default Footer;
