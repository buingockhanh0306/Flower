import * as actionTypes from './cartType'

const initState ={
    cart:[]
}

const cartLocal = localStorage.getItem('todoCart')
initState.cart = cartLocal ? JSON.parse(cartLocal) : []

const cartReducer = (state=initState, action) =>
{
    switch (action.type){
        case actionTypes.ADD_TO_CART:
        const cart = state.cart
        const idx = cart.findIndex(item=> item.id === action.payload.id)
        idx === -1 ? cart.push({...action.payload, qty: 1}) : cart[idx].qty++
        localStorage.setItem('todoCart', JSON.stringify(cart))
        return{
            ...state, 
            cart
            }


        case actionTypes.REMOVE_FROM_CART:
            const cartFilter = state.cart.filter(item=>item.id !== action.payload.id)
            localStorage.setItem('todoCart', JSON.stringify(cartFilter))
            return{
                ...state, 
                cart: cartFilter
            }


        case actionTypes.ADJUST_QTY:
            return{
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty}: item)
            }


        default:  return state;
    }
}
export default cartReducer