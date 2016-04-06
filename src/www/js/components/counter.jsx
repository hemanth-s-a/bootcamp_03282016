"use strict";

import React from "react";

export default class extends React.Component {
    constructor(props) {
        super();
        this.incrementButton = this.incrementButton.bind(this);
        this.decrementButton = this.decrementButton.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    incrementButton() {
        this.props.incrementCounter();
    }

    decrementButton() {
        this.props.decrementCounter();
    }

    onChange(e) {
        let value = parseInt(e.target.value, 10);
        if (isNaN(value)) {
            return;
        }
        this.props.changeCounter(value);
    }

    render() {
        return <div>
            <h1>Counter Demo</h1>
            <span>Counter: <input type="text" value={ this.props.counter } onChange={this.onChange} /></span>
            <button onClick={this.incrementButton}>+</button>
            <button onClick={this.decrementButton}>-</button>
        </div>;
    }
};