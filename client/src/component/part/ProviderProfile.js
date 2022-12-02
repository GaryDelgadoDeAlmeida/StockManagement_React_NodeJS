import React from "react";
import UpdateProviderForm from "../form/Provider/UpdateProviderForm";

export default function ProviderProfile({entity}) {

    return (
        <div className={"card-content silver"}>
            <div className={"-header"}>
                <h5>Profile</h5>
            </div>
            <div className={"-body"}>
                <UpdateProviderForm entity={entity} />
            </div>
        </div>
    )
}