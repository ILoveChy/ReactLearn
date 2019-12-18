
const INCREASE = Symbol("increase");

const DECREASE = Symbol("decrease");

const SET = Symbol("set");

export function createIncreaseAction() {
    return {
        type: INCREASE
    }
}


export function createDecreaseAction() {
    return {
        type: DECREASE
    }
}


export function createSetAction(newNumber) {
    return {
        type: SET,
        payload: newNumber
    }
}