import React, { useEffect } from "react";
import { useFetchAPI } from "../hooks/entity";
import UpdateCustomerForm from "../form/Customer/UpdateCustomerForm";

export default function CustomerProfile({customerID}) {
    const { entities: customer, load, loading } = useFetchAPI(`/api/customer/${customerID}`)

    useEffect(() => {
        load()
    }, [])
    
    return (
        <div className={"card-content silver"}>
            <div className={"-header"}>
                <h5>Profile</h5>
            </div>
            <div className={"-body"}>
                {loading === false ? (
                    <UpdateCustomerForm customer={customer} />
                ) : (
                    <p>Loading ...</p>
                )}
            </div>
        </div>
    )
}