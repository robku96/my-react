import React, { Component } from 'react';
import * as mobx from 'mobx'
import { observer, inject } from "mobx-react";
import './SidebarItemAuthors.css';

const SidebarItemAuthors = inject("bookStore")(observer(
    class SidebarItemAuthors extends Component {
        constructor(props) {
            super(props);
            this.state = {

            }
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.props.bookStore.isSelectedAuthors = true;
            this.props.bookStore.isSelectedBooks = false;
            this.props.bookStore.isAuthorsTable = true;
            this.props.bookStore.isBooksTable = false;
        }

        render() {
            const { isSelectedAuthors } = this.props.bookStore;
            return (
                <div>
                    {isSelectedAuthors ? (
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
export default SidebarItemAuthors;