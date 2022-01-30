import * as actionTypes from './cartType'

const initState ={
    products: [
        {
         "name": "White Rose",
         "price": "40",
         "imageURL": "assets/images/flower1.jpg",
         "id": "1"
        },
        {
         "name": "Pink Rose",
         "price": "41",
         "imageURL": "assets/images/flower2.jpg",
         "id": "2"
        },
        {
         "name": "Blue Rose",
         "price": "42",
         "imageURL": "assets/images/flower3.jpg",
         "id": "3"
        },
        {
         "name": "Orange Rose",
         "price": "43",
         "imageURL": "assets/images/flower17.jpg",
         "id": "4"
        },
        {
         "name": "White Rose 1",
         "price": "40",
         "imageURL": "assets/images/flower19.jpg",
         "id": "5"
        },
        {
         "name": "White Rose 2",
         "price": "41",
         "imageURL": "assets/images/flower10.jpg",
         "id": "6"
        },
        {
         "name": "White Rose 3",
         "price": "42",
         "imageURL": "assets/images/flower5.jpg",
         "id": "7"
        },
        {
         "name": "White Rose 4",
         "price": "43",
         "imageURL": "assets/images/flower20.jpg",
         "id": "8"
        }
       ],
    cart:[],
    currentItem: null
}

const cartReducer = (state=initState, action) =>
{
    switch (action.type){
        case actionTypes.ADD_TO_CART:
        const item = state.products.find(prod => prod.id === action.payload.id)
        const inCart = state.cart.find(item=>item.id===action.payload.id ? true :false)
        return{
            ...state, 
            cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty+1} :item) 
            :[...state.cart, {...item, qty: 1}]
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

        case actionTypes.LOAD_CURRENT_ITEM:
            return{}

        default:  return state;
    }
}
export default cartReducer