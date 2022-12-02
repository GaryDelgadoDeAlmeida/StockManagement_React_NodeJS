import { ADD_CUSTOMER_ACTION, DELETE_CUSTOMER_ACTION, SEARCH_CUSTOMER_ACTION, UPDATE_CUSTOMER_ACTION } from "../actions";

export const addCustomer = (customer) => {
    return {
        type: ADD_CUSTOMER_ACTION,
        payload: customer
    }
}

export const updateCustomer = (customerID, fields) => {
    return {
        type: UPDATE_CUSTOMER_ACTION,
        payload: {
            customerID: customerID,
            fieldsToUpdate: fields
        }
    }
}

export const deleteCustomer = (customerID) => {
    return {
        type: DELETE_CUSTOMER_ACTION,
        payload: customerID
    }
}

export const searchCustomer = (value) => {
    return {
        type: SEARCH_CUSTOMER_ACTION,
        payload: value
    }
}