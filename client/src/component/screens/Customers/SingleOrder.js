import React from "react";
import { useSelector } from "react-redux";
import ReturnButton from "../../part/ReturnButton";

export default function SingleOrder({orderID}) {
    const order = useSelector(({orders}) => orders.filter(order => order.id === orderID)[0])
    const productOrders = useSelector(({productOrders}) => productOrders.filter((prdOrd) => prdOrd.orderID === orderID))
    const products = useSelector(({products}) => products)
    let amount = 0

    const getProduct = (productID) => {
        return products.filter((product) => product.id === productID)[0]
    }

    if(!order) {
        return (<p>Error</p>)
    }
    
    return (
        <div className={"customer"}>
            <ReturnButton url={`/customers/${order.customerID}`} />

            <div className={"order-infos"}>
                <div className={"card-content silver"}>
                    <div className={"-header"}>
                        <h5>Paid</h5>
                    </div>
                    <div className={"-body"}>{order.paid ? "Yes" : "No"}</div>
                </div>
                <div className={"card-content silver"}>
                    <div className={"-header"}>
                        <h5>Status</h5>
                    </div>
                    <div className={"-body"}>{order.status}</div>
                </div>
                <div className={"card-content silver"}>
                    <div className={"-header"}>
                        <h5>Ordered at</h5>
                    </div>
                    <div className={"-body"}>{order.createdAt !== null ? order.createdAt.toLocaleDateString("en-US") : null}</div>
                </div>
                <div className={"card-content silver"}>
                    <div className={"-header"}>
                        <h5>Delivered at</h5>
                    </div>
                    <div className={"-body"}>{order.deliveredAt.toLocaleDateString("en-US")}</div>
                </div>
            </div>

            <div className={"ordered-products"}>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price (€)</th>
                            <th>Total amount (€)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productOrders.map((prdOrd, i) => {
                            let product = getProduct(prdOrd.productID)
                            amount += product.price * prdOrd.quantity
                            return (
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{prdOrd.quantity}</td>
                                    <td>{product.price}</td>
                                    <td>{product.price * prdOrd.quantity}</td>
                                </tr>
                            )
                        })}
                        
                        <tr className={"total-amount"}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Sub total</td>
                            <td>{amount}</td>
                        </tr>

                        <tr className={"total-amount"}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Remise</td>
                            <td>0</td>
                        </tr>

                        <tr className={"total-amount"}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>TVA</td>
                            <td>20 %</td>
                        </tr>

                        <tr className={"total-amount"}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total</td>
                            <td>{amount * 1.20}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}