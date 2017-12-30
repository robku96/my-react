import React, { Component } from 'react';
import './MyButton.css';

class MyButton extends Component {
    

    render() {
        return (
            <div>
                <button className={this.props.className} onClick={this.props.onClick}>{this.props.children}</button>
            </div>
        )
    }
}

export default MyButton;
