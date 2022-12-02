import { combineReducers, createStore } from "redux";
import { customersReducer } from "./customers/initialState";
import { employeeReducer } from "./employee/initialState";
import { orderReducer } from "./order/initialState";
import { productsReducer } from "./product/initialState";
import { entityReducer } from "./entity/initialState";
import { productOrderReducer } from "./productOrder/initialState";

export const store = createStore(
    combineReducers({
        products: productsReducer,
        employees: employeeReducer,
        orders: orderReducer,
        productOrders: productOrderReducer,
        customers: customersReducer,
        entities: entityReducer,
        isAuthentified: false
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);