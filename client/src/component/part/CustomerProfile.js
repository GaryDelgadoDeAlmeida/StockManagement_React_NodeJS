import React from "react";
import UpdateCustomerForm from "../form/Customer/UpdateCustomerForm";

export default function CustomerProfile({customerID}) {
    
    return (
        <div className={"card-content silver"}>
            <div className={"-header"}>
                <h5>Profile</h5>
            </div>
            <div className={"-body"}>
                <UpdateCustomerForm customerID={customerID} />
            </div>
        </div>
    )
}