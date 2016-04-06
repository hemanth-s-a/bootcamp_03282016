"use strict";

import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/counter.jsx";
import FormComponent from "./components/FormComponent.jsx";
import TableWidget from "./components/TableWidget.jsx";
import $ from "jquery";

let c = 0;

const actionIncrement = () => {
    return { type: "INCREMENT" };
};

const actionDecrement = () => {
    return { type: "DECREMENT" };
};

const actionChangeCounter = (counter) => {
    return {
        type: "CHANGE_COUNTER",
        counter: counter
    };
}

const reducer = (state, action) => {
    if (typeof state === "undefined") {
        state = {
            array: [],
            editMode: true
        };
    }
    if (!action) {
        return state;
    }
    switch(action.type) {
        case "INCREMENT":
            return Object.assign({}, state, { counter: state.counter+1 });
        case "DECREMENT":
            return Object.assign({}, state, { counter: state.counter-1 });
        case "CHANGE_COUNTER":
            return Object.assign({}, state, { counter: action.counter });
        case "SUBMIT":
            console.log(action.data);
            let newArray = state.array.slice(0);
            newArray.push(action.data);
            return Object.assign({}, state, {
                array: newArray,
                editMode: false
            });
            // return newStore;
        case "UPDATE_FORM":
            console.log(action.data);
            let newStore = Object.assign({}, state, {
                formData: action.data,
                editMode: true
            });
            return newStore;
        default:
            return state;
    }
};

const store = createStore(reducer);

function render() {
    ReactDOM.render(
        React.createElement(FormComponent, {
            submitForm: (args) => {
                store.dispatch({
                    type: "SUBMIT",
                    data: args
                });
            },
            data: store.getState().formData || {},
            editMode: store.getState().editMode
        }),
        document.querySelector("main"));
};

function renderTable() {
    ReactDOM.render(
        React.createElement(TableWidget, {
            tableHeaders: ["Name", "Description", "Color", "Size", "Quantity"],
            tableData: store.getState().array,
            updateForm: (data) => {
                store.dispatch({
                    type: "UPDATE_FORM",
                    data: data
                });
            },
            editMode: store.getState().editMode
        }), document.querySelector("mainTable"));
};

// ReactDOM.render(
//     React.createElement(
//         Counter,
//         { store: store }),
//     document.querySelector("main"));

store.subscribe(renderTable);

store.subscribe(render);

// store.dispatch(actionIncrement());

// function render() {
//     let tpl = "<input name='counter'><button>Increment</button>";
//     let mainElement = $("main");
//     mainElement.empty().append(tpl);

//     mainElement.find("input").val(store.getState().counter);
//     mainElement.find("button").on("click", function() {
//         store.dispatch(actionIncrement());
//     });
// };

$(function() {
    render();
});

