import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Products from './screens/Products';
import UpdateProduct from "./screens/Product/UpdateProduct";
import NewProduct from "./screens/Product/NewProduct";
import SingleProduct from "./screens/Product/SingleProduct";
import Customers from './screens/Customers';
import Sales from './screens/Sales';
import Providers from './screens/Providers';
import Employees from './screens/Employees';
import NewEmployee from './screens/Employees/NewEmployee';
import Payments from './screens/Payments';
import SingleCustomer from './screens/Customers/SingleCustomer';
import NewCustomer from './screens/Customers/NewCustomer';
import SingleOrder from './screens/Customers/SingleOrder';
import SingleSale from './screens/Sales/SingleSale';
import SingleProvider from './screens/Providers/SingleProvider';
import OngoingOrders from './screens/Sales/OngoingOrders';
import SingleEmployee from './screens/Employees/SingleEmployee';

export default function RoutesConfig() {

    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/products"} element={<Products />} />
            <Route path={"/products/new"} element={<NewProduct />} />
            <Route path={"/products/:id"} element={<SingleProduct productID={1} />} />
            <Route path={"/products/:id/edit"} element={<UpdateProduct productID={1} />} />
            <Route path={"/customers"} element={<Customers />} />
            <Route path={"/customers/new"} element={<NewCustomer />} />
            <Route path={"/customers/:id"} element={<SingleCustomer customerID={1} />} />
            <Route path={"/customers/:id/order/:id"} element={<SingleOrder orderID={1} />} />
            <Route path={"/sales"} element={<Sales />} />
            {/* <Route path={"/sales/:id"} element={<SingleSale saleID={1} />} /> */}
            <Route path={"/sales/:id"} element={<SingleOrder orderID={1} />} />
            <Route path={"/sales/ongoing-orders"} element={<OngoingOrders />} />
            <Route path={"/providers"} element={<Providers />} />
            <Route path={"/providers/:id"} element={<SingleProvider entityID={1} />} />
            <Route path={"/employees"} element={<Employees />} />
            <Route path={"/employees/:id"} element={<SingleEmployee employeeID={1} />} />
            <Route path={"/employees/add"} element={<NewEmployee />} />
            <Route path={"/payments"} element={<Payments />} />
        </Routes>
    )
}