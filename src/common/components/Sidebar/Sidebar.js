import React, { Component } from 'react';
import SidebarItemBooks from '../SidebarItemBooks/SidebarItemBooks.js';
import SidebarItemAuthors from '../SidebarItemAuthors/SidebarItemAuthors.js';
import authors from '../../icons/authors.svg';
import books from '../../icons/books.svg';
import './Sidebar.css';


class Sidebar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="Sidebar">
                <SidebarItemBooks source={books}  />
                <SidebarItemAuthors source={authors} />
            </div>
        );
    };
}

export default Sidebar;