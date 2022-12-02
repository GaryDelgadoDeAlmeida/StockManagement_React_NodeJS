import { ADD_EMPLOYEE_ACTION, DELETE_EMPLOYEE_ACTION, SEARCH_EMPLOYEE_ACTION, UPDATE_EMPLOYEE_ACTION } from "../actions"

export const addEmployee = (employee) => {
    return {
        type: ADD_EMPLOYEE_ACTION,
        payload: employee
    }
}

export const updateEmployee = (employee) => {
    return {
        type: UPDATE_EMPLOYEE_ACTION,
        payload: employee
    }
}

export const deleteEmployee = (employeeID) => {
    return {
        type: DELETE_EMPLOYEE_ACTION,
        payload: parseInt(employeeID)
    }
}

export const searchEmployee = (value) => {
    return {
        type: SEARCH_EMPLOYEE_ACTION,
        payload: value
    }
}