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
                    <button className="RoundButton Clicked" onClick={this.handleClick}> 
                        <img className="Icon" src={this.props.source} alt="icon"></img>
                        <div className="Popup"><h2>INFO ABOUT APPLICATION</h2></div>
                    </button>) 
                    : ( <button className="RoundButton" onClick={this.handleClick}>
                        <img className="Icon" src={this.props.source} alt="icon"></img>
                    </button>)}
            </div>
        )
    }
}

export default MyButton;