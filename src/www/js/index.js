"use strict";

import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/counter.jsx";
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
            counter: 0
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
        default:
            return state;
    }
};

const store = createStore(reducer);

function render() {
    ReactDOM.render(
        React.createElement(Counter, {
                counter: store.getState().counter,
                incrementCounter: () => {
                    store.dispatch(actionIncrement());
                },
                decrementCounter: () => {
                    store.dispatch(actionDecrement());
                },
                changeCounter: (counter) => {
                    store.dispatch(actionChangeCounter(counter));
                }
            }),
        document.querySelector("main"));
};

// ReactDOM.render(
//     React.createElement(
//         Counter,
//         { store: store }),
//     document.querySelector("main"));

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

