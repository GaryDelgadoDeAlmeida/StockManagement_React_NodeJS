import React, { useEffect } from "react";
import UpdateProviderForm from "../form/Provider/UpdateProviderForm";
import { useFetchAPI } from "../hooks/entity";

export default function ProviderProfile({entityID}) {
    const { entities: entity, load, loading} = useFetchAPI("/api/entity/" + entityID)

    useEffect(() => {
        load()
    }, [])

    return (
        <div className={"card-content silver"}>
            <div className={"-header"}>
                <h5>Profile</h5>
            </div>
            <div className={"-body"}>
                {!loading ? (
                    <UpdateProviderForm entity={entity} />
                ) : (
                    <p>Loading ...</p>
                )}
            </div>
        </div>
    )
}