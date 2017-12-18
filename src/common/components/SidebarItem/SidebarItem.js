import React, { Component } from 'react';
import './SidebarItem.css';

class SidebarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isSelected: !this.state.isSelected
        });
    }

    render() {
        const { isSelected } = this.state;
        return (
            <div>
                {isSelected ? (
                    <div onClick={this.handleClick} className="SidebarItem selected" >
                        <img className="icon" src={this.props.source} alt="icon"></img>
                    </div>) : (
                    <div onClick={this.handleClick} className="SidebarItem">
                        <img className="icon" src={this.props.source} alt="icon"></img>
                    </div>)}
            </div>
        )
    }
}

export default SidebarItem;