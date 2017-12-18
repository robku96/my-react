import React, { Component } from 'react';
import MyButton from '../MyButton/MyButton.js';
import Info from '../../icons/info.svg';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
          <MyButton source={Info} />
      </div>
    );
  }
}

export default Footer;
