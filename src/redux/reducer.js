const initState={
    todoCart:[
       ],
    price: []
}

const rootReducer = (state = initState, action) =>
{
    switch (action.type){
        case 'todoCart/addProduct':
            return{
                ...state,
                todoCart: [
                    ...state.todoCart,
                    action.payload
                ]
            }
        case 'todoCart/removeProduct':
            let todoCart = state.todoCart;
            todoCart = todoCart.filter(item => item.id !== action.payload.id)
            return{
                ...state,
                todoCart
            }
        
        case 'todoTotal/priceProduct':
            return{
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