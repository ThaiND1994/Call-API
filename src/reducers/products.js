import * as types from './../const/ActionType';
var initialState = [];

var findIndex = (state, id) => {
    var result = null;
    state.forEach((product, index) => {
        if (product.id === id) {
            result = index
        }
    });
    return result;
}

const products = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            state = action.products
            return [...state];
        case types.DELETE_PRODUCTS:
            index = findIndex(state, action.id)
            state.splice(index, 1)
            return [...state];
        case types.ADD_PRODUCTS:
            state.push(action.products)
            return [...state];
        case types.UPDATE_PRODUCTS:
            // tìm vị trí của phần tử đó trong mảng
            index=findIndex(state,action.product.id)
            // gán cho phần tử ở vị trí index = action.product
            state[index]=action.product
            return [...state];
        default: return [...state];
    }
}

export default products