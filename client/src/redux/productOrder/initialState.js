const initialProductOrderState = [
    {
        id: 1,
        orderID: 1,
        productID: 1,
        quantity: 2,
        createdAt: new Date()
    },
    {
        id: 2,
        orderID: 1,
        productID: 2,
        quantity: 1,
        createdAt: new Date()
    }
]

export const productOrderReducer = (state = initialProductOrderState, action) => {
    switch(action.type) {
        default:
            return state
    }
}