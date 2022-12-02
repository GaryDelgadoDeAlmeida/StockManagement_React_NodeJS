const initialOrderReducer = [
    {
        id: 1,
        customerID: 1,
        productOrders: [1, 2],
        status: "ONGOING",
        paid: false,
        deliveredAt: new Date(),
        createdAt: new Date()
    },
    {
        id: 2,
        customerID: 1,
        productOrders: [2],
        status: "ONGOING",
        paid: false,
        deliveredAt: new Date(),
        createdAt: new Date()
    },
    {
        id: 3,
        customerID: 1,
        productOrders: [3],
        status: "ONGOING",
        paid: false,
        deliveredAt: new Date(),
        createdAt: new Date()
    },
    {
        id: 4,
        customerID: 2,
        productOrders: [1],
        status: "DELIVERED",
        paid: true,
        deliveredAt: new Date(),
        createdAt: new Date()
    }
]

export const orderReducer = (state = initialOrderReducer, action) => {
    switch(action.type) {
        default:
            return state
    }
}