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
                <div className="Row">
                    <div className="Cell">some example some example some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                </div>
                <div className="Row">
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                </div>
                <div className="Row">
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                    <div className="Cell">some example</div>
                </div>
            </div>
        )
    }
}

export default Table;