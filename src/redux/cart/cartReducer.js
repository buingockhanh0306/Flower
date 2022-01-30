import * as actionTypes from './cartType'

const initState ={
    products: [],
    cart:[],
    currentItem: null
}

const cartReducer = (state=initState, action) =>
{
    switch (action.type){
        case actionTypes.ADD_TO_CART:
            return{}

        case actionTypes.REMOVE_FROM_CART:
            return{}

        case actionTypes.ADJUST_QTY:
            return{}

        case actionTypes.LOAD_CURRENT_ITEM:
            return{}

        default:  return state;
    }
}
export default cartReducer