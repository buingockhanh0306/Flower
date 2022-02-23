import * as actionTypes from './cartType'

const initState ={
    cart:[],
}

const cartLocal = localStorage.getItem('todoCart')
initState.cart = cartLocal ? JSON.parse(cartLocal) : []

const cartReducer = (state=initState, action) =>
{
    switch (action.type){
        case actionTypes.ADD_TO_CART:
        const cart = state.cart
        const idx = cart.findIndex(item=> item.id === action.payload.id)
        const existedItem = idx === -1 ? cart.push(action.payload) : cart[idx].qty++
        localStorage.setItem('todoCart', JSON.stringify(cart))

        console.log({cart});
        return{
            ...state, 
            cart
            }

        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state, 
                cart: state.cart.filter(item=>item.id !== action.payload.id)
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