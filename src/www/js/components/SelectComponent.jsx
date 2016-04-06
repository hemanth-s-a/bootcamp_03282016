"use strict";

import React from "react";

export default class extends React.Component {
    constructor(props) {
        super();
    }

    /**
     * Component should update only when the value has changed
     * @param  {props} nextProps new props
     * @param  {state} nextState the state that should be reflected
     * @return {boolean} whether the component should update
     */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.fieldValue !== nextProps.fieldValue;  
    }

    render() {
        return <div>
            <label>
                {this.props.fieldLabel}
                <select name={this.props.fieldName} value={this.props.fieldValue} onChange={this.props.fieldChange}>
                    {this.props.fieldOptions.map(function(option) {
                        return <option key={option.fieldValue} value={option.fieldValue}>{option.fieldLabel}</option>;
                    })}
                </select>
            </label>
        </div>;
    }
};
