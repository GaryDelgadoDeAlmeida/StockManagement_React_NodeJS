import React, { useState } from "react";
import ReturnButton from "../../part/ReturnButton";
import PastOrders from "../../part/PastOrders";
import CustomerProfile from "../../part/CustomerProfile";
import CustomerCurrentOrders from "../../part/CustomerCurrentOrders";
import { useParams } from "react-router-dom";

export default function SingleCustomer() {
    const { customerID } = useParams()
    const [currentOnglet, setCurrentOnglet] = useState("profile")

    const handleOnglet = (ongletName) => {
        setCurrentOnglet(ongletName)
    }

    return (
        <div className={"customer"}>
            <ReturnButton url={"/customers"} />

            <div className={"single-customer"}>
                <div className={"left-content"}>
                    <div className={"card-content"}>
                        <div className={"-header"}>
                            <h5>Customer</h5>
                        </div>
                        <div className={"-body"}>
                            <ul className={"customer-menu"}>
                                <li>
                                    <button onClick={(e) => handleOnglet("profile")}>Profile</button>
                                </li>
                                <li>
                                    <button onClick={(e) => handleOnglet("orders")}>Current orders</button>
                                </li>
                                <li>
                                    <button onClick={(e) => handleOnglet("past-orders")}>Past orders</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className={"right-content"}>
                    {currentOnglet === "profile" ? (
                        <CustomerProfile customerID={customerID} />
                    ) : (currentOnglet === "orders" ? (
                        <CustomerCurrentOrders customerID={customerID} />
                    ) : (currentOnglet === "past-orders" ? (
                        <PastOrders customerID={customerID} />
                    ) : null))}
                </div>
            </div>
        </div>
    )
}