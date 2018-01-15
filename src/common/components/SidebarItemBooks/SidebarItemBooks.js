import React, { Component } from 'react';
import * as mobx from 'mobx'
import { observer, inject } from "mobx-react";
import './SidebarItemBooks.css';

const SidebarItemBooks = inject("bookStore")(observer(
    class SidebarItemBooks extends Component {
        constructor(props) {
            super(props);
            this.state = {
            }
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.props.bookStore.isSelectedAuthors = false;
            this.props.bookStore.isSelectedBooks = true;
            this.props.bookStore.isAuthorsTable = false;
            this.props.bookStore.isBooksTable = true;
        }

        render() {
            const { isSelectedBooks } = this.props.bookStore;
            return (
                <div>
                    {isSelectedBooks ? (
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
))

export default SidebarItemBooks;