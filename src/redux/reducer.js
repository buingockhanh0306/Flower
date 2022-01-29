import axios from 'axios';

const flowers = axios.get(`https://61e52378595afe00176e534e.mockapi.io/flower/flower`)


const initState = {
    product: [flowers],
    todoCart: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoCart/addProduct':
            const item = state.product.find(prod => prod.id === action.payload.id)
            const inTodoCart = state.todoCart.find((item) => item.id === action.payload.id ? true : false)
            return {
                ...state,
                todoCart: 
                [
                   ...state.todoCart,
                   {...action.payload, qty: 1}
                ]
            }
            // ...state, 
            //     todoCart: inTodoCart ? state.todoCart.map((item)=>
            //     item.id === action.payload.id ? {...item, qty : item.qty + 1} : item
            //     )  : [...state.todoCart,  {...action.payload, qty: 1}]
        case 'todoCart/removeProduct':
            let todoCart = state.todoCart;
            todoCart = todoCart.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                todoCart
            }

        case 'todoTotal/priceProduct':
            return {
                ...state,
                price: [
                    ...state.price,
                    action.payload
                ]
            }

        default:
            return state;
    }
}
export default rootReducer;