"use strict";

import React from "react";
import FormTextField from "./FormTextField.jsx";
import FormTextArea from "./FormTextArea.jsx";
import SelectComponent from "./SelectComponent.jsx";
import NumberInput from "./NumberInput.jsx";

export default class extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: props.data.name || "",
            description: props.data.description || "",
            color: props.data.color || "",
            size: props.data.size || "",
            quantity: props.data.quantity || ""
        };
        this.submitForm = this.submitForm.bind(this);
        this.elementChanged = this.elementChanged.bind(this);
    }

    elementChanged(e) {
        var data = {};
        data[e.target.name] = e.target.value;
        this.setState(Object.assign({}, this.state, data));
    }

    submitForm() {
        this.props.submitForm(this.state);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.dir(nextState);
        return true;
    }

    render() {
        let colors = [{
            fieldLabel: "Select one",
            fieldValue: ""
        }, {
            fieldLabel: "Red",
            fieldValue: "red"
        }, {
            fieldLabel: "Blue",
            fieldValue: "blue"
        }],
        sizes = [{
            fieldLabel: "Select one",
            fieldValue: ""
        }, {
            fieldLabel: "Small",
            fieldValue: "small"
        }, {
            fieldLabel: "Medium",
            fieldValue: "medium"
        }, {
            fieldLabel: "Large",
            fieldValue: "large"
        }];
        return this.props.editMode ? <form>
            <FormTextField fieldLabel="Name" fieldName="name" fieldValue={this.props.data.name} fieldChange={this.elementChanged} />
            <FormTextArea fieldLabel="Description" fieldName="description" fieldValue={this.props.data.description} fieldChange={this.elementChanged} />
            <SelectComponent fieldLabel="Color" fieldName="color" fieldOptions={colors} fieldValue={this.props.data.color} fieldChange={this.elementChanged} />
            <SelectComponent fieldLabel="Size" fieldName="size" fieldOptions={sizes} fieldValue={this.props.data.size} fieldChange={this.elementChanged} />
            <NumberInput fieldLabel="Quantity" fieldName="quantity" fieldValue={this.props.data.quantity} fieldChange={this.elementChanged} />
            <button type="button" onClick={this.submitForm}>Submit</button>
        </form> : <form></form>;
    }
};
