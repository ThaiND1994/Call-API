import * as types from './../const/ActionType';
import callAPI from './../utils/apiCaller'
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callAPI('productLists', 'GET', null).then(
            res => {
                dispatch(actFetchProducts(res.data))
            }
        )
    }
}

export const actFetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductsRequest = (id) => {
    return (dispatch) => {
        return callAPI(`productLists/${id}`, 'DELETE', null).then(
            res => {
                dispatch(actDeleteProducts(id))
            }
        )
    }
}

export const actDeleteProducts = (id) => {
    return {
        type: types.DELETE_PRODUCTS,
        id
    }
}

export const actAddProductsRequest = (product) => {
    return (dispatch) => {
        return callAPI('productLists', 'POST', product).then(
            res => {
                dispatch(actAddProducts(res.data))
            }
        )
    }
}

export const actAddProducts = (products) => {
    return {
        type: types.ADD_PRODUCTS,
        products
    }
}

export const actEditProductsRequest = (id) =>{
    return (dispatch) =>{
        return callAPI(`productLists/${id}`,'GET',null).then(res=>{
            dispatch(actEditProducts(res.data))
        })
    }
}

export const actEditProducts =(product)=>{
    return {
        type: types.EDIT_PRODUCTS,
        product
    }
}

export const actUpdateProductsRequest= (product)=>{
    return (dispatch) =>{
        return callAPI(`productLists/${product.id}`,'PUT',product).then(res=>{
            dispatch(actUpdateProducts(res.data))
        })
    }
}


export const actUpdateProducts= (product)=>{
    return{
        type:types.UPDATE_PRODUCTS,
        product
    }
}