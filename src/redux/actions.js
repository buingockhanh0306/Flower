

export const addProduct = (data)=>
{
    return {
        type: 'todoCart/addProduct',
        payload: data
    }
}
export const removeProduct = (data)=>
{
    return {
        type: 'todoCart/removeProduct',
        payload: data
    }
}

export const priceProduct = (data)=>
{
    return {
        type: 'todoTotal/priceProduct',
        payload: data
    }
}