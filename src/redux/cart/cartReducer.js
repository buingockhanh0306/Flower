import * as actionTypes from './cartType'

const initState ={
    products: [
            {
             "name": "White Rose",
             "price": "40",
             "imageURL": "assets/images/flower1.jpg",
             "category": "flowers",
             "id": "1"
            },
            {
             "name": "Pink Rose",
             "price": "41",
             "imageURL": "assets/images/flower2.jpg",
             "category": "flowers",
             "id": "2"
            },
            {
             "name": "Blue Rose",
             "price": "42",
             "imageURL": "assets/images/flower3.jpg",
             "category": "flowers",
             "id": "3"
            },
            {
             "name": "Orange Rose",
             "price": "43",
             "imageURL": "assets/images/flower17.jpg",
             "category": "flowers",
             "id": "4"
            },
            {
             "name": "White Rose 1",
             "price": "40",
             "imageURL": "assets/images/flower19.jpg",
             "category": "flowers",
             "id": "5"
            },
            {
             "name": "White Rose 2",
             "price": "41",
             "imageURL": "assets/images/flower10.jpg",
             "category": "flowers",
             "id": "6"
            },
            {
             "name": "White Rose 3",
             "price": "42",
             "imageURL": "assets/images/flower5.jpg",
             "category": "flowers",
             "id": "7"
            },
            {
             "name": "White Rose 4",
             "price": "43",
             "imageURL": "assets/images/flower20.jpg",
             "category": "flowers",
             "id": "8"
            },
            {
             "name": "White Rose 4",
             "price": "43",
             "imageURL": "assets/images/plant2.jpg",
             "category": "plants",
             "id": "10"
            },
            {
             "name": "White Rose 4",
             "price": "43",
             "imageURL": "assets/images/plant3.jpg",
             "category": "plants",
             "id": "11"
            },
            {
             "name": "White Rose 4",
             "price": "43",
             "imageURL": "assets/images/plant4.jpg",
             "category": "plants",
             "id": "12"
            },
            {
             "name": "White Rose 4",
             "price": "43",
             "imageURL": "assets/images/plant5.jpg",
             "category": "plants",
             "id": "13"
            },
            {
             "name": "White Rose 4",
             "price": "43",
             "imageURL": "assets/images/plant6.jpg",
             "category": "plants",
             "id": "14"
            },
            {
             "name": "White Rose 4",
             "price": "43",
             "imageURL": "assets/images/plant7.jpg",
             "category": "plants",
             "id": "15"
            },
            {
             "name": "White Rose 4",
             "price": "43",
             "imageURL": "assets/images/plant8.jpg",
             "category": "plants",
             "id": "16"
            },
            {
             "name": "White Rose 4",
             "price": "43",
             "imageURL": "assets/images/gift1.jpg",
             "category": "gifts",
             "id": "17"
            },
            {
             "name": "White Rose 4",
             "price": "43",
             "imageURL": "assets/images/gift2.jpg",
             "category": "gifts",
             "id": "18"
            },
            {
             "name": "White Rose 4",
             "price": "43",
             "imageURL": "assets/images/gift3.jpg",
             "category": "gifts",
             "id": "19"
            },
            {
             "name": "White Rose 4",
             "price": "43",
             "imageURL": "assets/images/gift4.jpg",
             "category": "gifts",
             "id": "20"
            },
            {
             "name": "White Rose 4",
             "price": "43",
             "imageURL": "assets/images/gift5.jpg",
             "category": "gifts",
             "id": "21"
            },
            {
             "name": "White Rose 4",
             "price": "43",
             "imageURL": "assets/images/gift6.jpg",
             "category": "gifts",
             "id": "22"
            },
            {
             "name": "White Rose 4",
             "price": "43",
             "imageURL": "assets/images/gift7.jpg",
             "category": "gifts",
             "id": "23"
            },
            {
             "name": "White Rose 4",
             "price": "43",
             "imageURL": "assets/images/gift8.jpg",
             "category": "gifts",
             "id": "24"
            }
           ],
    cart:[],
    currentItem: null
}

const cartLocal = localStorage.getItem('todoCart')
initState.cart = JSON.parse(cartLocal)
const cartReducer = (state=initState, action) =>
{
    switch (action.type){
        case actionTypes.ADD_TO_CART:
        const item = state.products.find(prod => prod.id === action.payload.id)
        const inCart = state.cart.find(item=>item.id === action.payload.id ? true :false)
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


        default:  return state;
    }
}
export default cartReducer