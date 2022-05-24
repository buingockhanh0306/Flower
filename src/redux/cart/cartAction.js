import * as actionTypes from './cartType'

export const addToCart = (item) =>
{
    return {
        type: actionTypes.ADD_TO_CART,
        payload: item
    }
}

export const RemoveFromCart = (itemID) =>
{
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload:{
            id: itemID
        }
    }
}

export const adjustQty = (itemID, value) =>
{
    return {
        type: actionTypes.ADJUST_QTY,
        payload:{
            id: itemID,
            qty: value
        }
    }
}

export const loadCurrentItem = (item) =>
{
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
            
    }
}