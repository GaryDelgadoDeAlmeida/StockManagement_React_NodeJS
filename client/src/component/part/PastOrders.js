import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useFetchAPI } from "../hooks/entity"

export default function PastOrders({customerID}) {
    const orders = useSelector(({orders}) => orders.filter((order) => order.customerID === customerID))
    const productOrders = useSelector(({productOrders}) => productOrders)
    const products = useSelector(({products}) => products)
    const { entities, load, loading } = useFetchAPI("/api/customer/" + customerID + "/orders")

    const getTotalAmount = (order) => {
        let totalAmout = 0.0;
        
        order.productOrders.map(productOrder => {
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
        <div className={"past-orders card-content silver"}>
            <div className={"-header"}>
                <h5>Past orders</h5>
            </div>
            <div className={"-body"}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Total amount</th>
                            <th>Status</th>
                            <th>Ordered at</th>
                            <th>Delivered at</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order, i) => {
                                return (
                                    <tr key={i} className={"order-card"}>
                                        <td>{order.id}</td>
                                        <td>{getTotalAmount(order)}</td>
                                        <td>
                                            <span className={"badge success"}>{order.status}</span>
                                        </td>
                                        <td>{order.createdAt.toLocaleDateString("en-US")}</td>
                                        <td>{order.deliveredAt.toLocaleDateString("en-US")}</td>
                                        <td>
                                            <Link to={`/customers/${customerID}/order/${order.id}`}>
                                                <img src="/content/svg/eye.svg" alt="" />
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr>
                                <td colSpan={4}>There is no order</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}