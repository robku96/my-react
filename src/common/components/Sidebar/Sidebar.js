import React, { Component } from 'react';
import SidebarItem from '../SidebarItem/SidebarItem.js';
import authors from '../../icons/authors.svg';
import books from '../../icons/books.svg';
import './Sidebar.css';


class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return (
            <div className="Sidebar">
                <SidebarItem source={books} />
                <SidebarItem source={authors} />
            </div>
        );
    }
}

export default Sidebar;