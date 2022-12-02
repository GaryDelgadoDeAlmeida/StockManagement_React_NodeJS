import { ADD_ORDER_ACTION, DELETE_ORDER_ACTION, UPDATE_ORDER_ACTION } from "../actions";

export const newOrderAction = (order) => {
    return {
        type: ADD_ORDER_ACTION,
        payload: order
    }
}

export const updateOrderAction = (orderID, order) => {
    return {
        type: UPDATE_ORDER_ACTION,
        payload: {
            orderID: orderID,
            dataToUpdate: order
        }
    }
}

export const deleteOrderAction = (orderID) => {
    return {
        type: DELETE_ORDER_ACTION,
        payload: orderID
    }
}