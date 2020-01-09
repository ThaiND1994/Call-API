import {combineReducers} from 'redux';
import products from './products';
import itemEditing from './itemEditing';
const AppReducers = combineReducers({
    products,
    itemEditing
})

export default AppReducers;