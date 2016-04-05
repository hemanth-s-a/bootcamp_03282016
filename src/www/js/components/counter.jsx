"use strict";

import React from "react";

export default class extends React.Component {
    constructor(props) {
        super();
        this.incrementButton = this.incrementButton.bind(this);
        this.decrementButton = this.decrementButton.bind(this);
    }

    incrementButton() {
        this.props.incrementCounter();
    }

    decrementButton() {
        this.props.decrementCounter();
    }

    render() {
        return <div>
            <h1>Counter Demo</h1>
            <span>Counter: { this.props.counter }</span>
            <button onClick={this.incrementButton}>+</button>
            <button onClick={this.decrementButton}>-</button>
        </div>;
    }
};