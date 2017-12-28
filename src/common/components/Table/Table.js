import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({

        });
    }

    render() {
        return (
            <div className="Table">
                <div className="Header"> {
                    this.props.headers.map((title, index) => {
                        return <div key={index} className="Cell">{title}</div>;
                    }) } 
                </div>
                {   
                    this.props.data.map((book,index) => {
                        return <div key={index} className="Row">
                            <div className="Cell"> {book.title} </div>
                            <div className="Cell"> {book.authorId} </div>
                            <div className="Cell"> {book.publication_year} </div>
                            <div className="Cell"> {book.publishing_house} </div>
                            <div className="Cell"> {book.pages} </div>
                            <div className="Cell"> {book.price} </div>
                            
                        </div>
                    }) }
            </div>
        )
    }
}

export default Table;