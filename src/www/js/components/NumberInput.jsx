"use strict";

import React from "react";

export default class extends React.Component {
    constructor(props) {
        super();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.fieldValue !== nextProps.fieldValue;  
    }

    render() {
        return <div>
            <label>
                {this.props.fieldLabel}: 
                <input type="number" name={this.props.fieldName} value={this.props.fieldValue} onChange={this.props.fieldChange} />
            </label>
        </div>;
    }
};