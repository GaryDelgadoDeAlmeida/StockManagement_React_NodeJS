import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReturnButton from "../../part/ReturnButton";

export default function OngoingOrders() {
    const ongoingOrd = useSelector(({orders}) => orders.filter((order) => order.status === "ONGOING"))
    const customers = useSelector(({customers}) => customers)
    const products = useSelector(({products}) => products)
    const productOrders = useSelector(({productOrders}) => productOrders)

    const findCustomer = (customerID) => {
        return customers.filter((customer) => customer.id === customerID)[0]
    }

    const getTotalAmount = (prdOrders) => {
        let totalAmout = 0
        
        prdOrders.map(productOrder => {
            productOrders.filter((prdOrd) => {
                if(prdOrd.id === productOrder) {
                    products.filter((product) => {
                        if(product.id === prdOrd.productID) {
                            totalAmout += (prdOrd.quantity * product.price)
                            return
                        }
                    })
                    return
                }
            })
        })

        return totalAmout
    }

    return (
        <>
            <ReturnButton url={"/sales"} />

            <div className={"card-content silver"}>
                <div className={"-header"}>
                    <h5 className={"title"}>Ongoing orders</h5>
                </div>
                <div className={"-body"}>
                    <table>
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Paid</th>
                                <th>Status</th>
                                <th>Amount</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {ongoingOrd.length > 0 ? (
                                ongoingOrd.map((order, i) => {
                                    let customer = findCustomer(order.customerID)

                                    return (
                                        <tr key={i}>
                                            <td>{customer.firstname} {customer.lastname}</td>
                                            <td>{order.paid ? "Yes" : "No"}</td>
                                            <td>{order.status}</td>
                                            <td>{getTotalAmount(order.productOrders)}</td>
                                            <td>
                                                <Link to={`/sales/${order.id}`}>
                                                    <img src={"/content/svg/eye.svg"} alt={""} />
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan={5}>There is no ongoing order</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <div className={"pagination"}></div>
                </div>
            </div>
        </>
    )
}