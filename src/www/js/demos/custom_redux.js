"use strict";

import $ from "jquery";
import { createStore } from "redux";

const actionIncrement = () => {
    return { type: "INCREMENT" };
};

const actionDecrement = () => {
    return { type: "DECREMENT" };
};

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
        default:
            return state;
    }
};

function createStore(reducer) {
    let state = reducer(), nextState, callbacks = [];

    let store = {
        dispatch: (action) => {
            nextState = reducer(state, action);

            if (state !== nextState) {
                state = nextState;
                callbacks.forEach((callback) => {
                    callback();
                });
            }
        },
        subscribe: (callback) => {
            callbacks.push(callback);
        },
        getState: () => {
            return state;
        }
    }

    return store;
};

const store = createStore(reducer);

store.subscribe(render);

store.dispatch(actionIncrement());

function render() {
    let tpl = "<input name='counter'><button>Increment</button>";
    let mainElement = $("main");
    mainElement.empty().append(tpl);

    mainElement.find("input").val(store.getState().counter);
    mainElement.find("button").on("click", function() {
        store.dispatch(actionIncrement());
    });
};

$(function() {
    render();
});

