import { ADD_CUSTOMER_ACTION, UPDATE_CUSTOMER_ACTION, DELETE_CUSTOMER_ACTION } from "./actions"

const initialCustomerState = [
    {
        id: 1,
        avatar: "",
        firstname: "Garry",
        lastname: "ALMEIDA",
        email: "gary.almeida.work@gmail.com",
        phone: "06 52 07 39 97",
        fax: "01 40 44 08 63",
        address: "189 Rue vercingétorix",
        zipCode: "75014",
        city: "Paris",
        country: "France"
    }
]

export const customersReducer = (state = initialCustomerState, action) => {
    
    switch(action.type) {
        case ADD_CUSTOMER_ACTION:
            break

        case UPDATE_CUSTOMER_ACTION:
            break

        case DELETE_CUSTOMER_ACTION:
            return state.filter((customer) => customer.id !== action.payload)

        default:
            return state
    }
}