import { ADD_EMPLOYEE_ACTION, DELETE_EMPLOYEE_ACTION, UPDATE_EMPLOYEE_ACTION } from "./actions"

const employeeState = [
    {
        id: 1,
        firstname: "Garry",
        lastname: "Almeida",
        address: "189 Rue Vercingétorix",
        zipCode: "75014",
        city: "Paris",
        country: "France",
        email: "gary.almeida.work@gmail.com",
        phone: "06 52 07 39 97",
        fax: "01 40 44 08 63",
    },
    {
        id: 2,
        firstname: "Garry",
        lastname: "Almeida",
        address: "189 Rue Vercingétorix",
        zipCode: "75014",
        city: "Paris",
        country: "France",
        email: "gary.almeida.work@gmail.com",
        phone: "06 52 07 39 97",
        fax: "01 40 44 08 63",
    },
    {
        id: 3,
        firstname: "Garry",
        lastname: "Almeida",
        address: "189 Rue Vercingétorix",
        zipCode: "75014",
        city: "Paris",
        country: "France",
        email: "gary.almeida.work@gmail.com",
        phone: "06 52 07 39 97",
        fax: "01 40 44 08 63",
    }
]

export const employeeReducer = (state = employeeState, action) => {

    switch(action.type) {
        case ADD_EMPLOYEE_ACTION:
            return state

        case UPDATE_EMPLOYEE_ACTION:
            return state

        case DELETE_EMPLOYEE_ACTION:
            return state.filter((employee) => employee.id !== action.payload)

        default:
            return state
    }
}