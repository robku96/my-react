import React, { Component } from 'react';
import './MyButton.css';

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isClicked: !this.state.isClicked
        });
    }

    render() {
        const { isClicked } = this.state;
        return (
            <div>
                {isClicked ? (
                    <button className={`${this.props.buttonClass} ${this.props.buttonClassClicked}`} > 
                        <img className={this.props.iconClass} src={this.props.source} alt="icon"></img>
                        <div className={this.props.popupClass}><h2>INFO ABOUT APPLICATION</h2></div>
                    </button>) 
                    : ( <button className={this.props.buttonClass}>  
                        <img className={this.props.iconClass} src={this.props.source} alt="icon"></img>
                    </button>)}
            </div>
        )
    }
}

export default MyButton;