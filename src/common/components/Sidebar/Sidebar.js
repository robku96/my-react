import React, { Component } from 'react';
import SidebarItem from '../SidebarItem/SidebarItem.js';
import settings from '../../icons/settings.svg';
import books from '../../icons/books.svg';
import layers from '../../icons/layers.svg';
import edit from '../../icons/edit.svg';
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
                <SidebarItem source={settings} />
                <SidebarItem source={layers} />
                <SidebarItem source={edit} />
            </div>
        );
    }
}

export default Sidebar;