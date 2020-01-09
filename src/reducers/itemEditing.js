import * as types from './../const/ActionType';
var initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_PRODUCTS:
            state.pop()
            state.unshift(action.product)
            return state;
        default: return [...state];
    }
}

export default products