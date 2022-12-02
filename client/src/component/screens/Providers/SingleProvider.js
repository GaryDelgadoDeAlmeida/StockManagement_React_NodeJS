import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProviderProducts from "../../part/ProviderProducts";
import ProviderProfile from "../../part/ProviderProfile";
import ReturnButton from "../../part/ReturnButton";

export default function SingleProvider({entityID}) {
    const [currentOnglet, setCurrentOnglet] = useState("profile")
    const entity = useSelector(({entities}) => entities.filter((provider) => provider.id === entityID)[0])

    const handleOnglet = (type) => {
        setCurrentOnglet(type)
    }

    return (
        <div className={"providers"}>
            <ReturnButton url={"/providers"} />

            <div className={"single-provider profile"}>
                <div className={"left-content"}>
                    <div className={"card-content"}>
                        <div className={"-header"}>
                            <h5>Provider</h5>
                        </div>
                        <div className={"-body"}>
                            <ul className={"customer-menu"}>
                                <li>
                                    <button onClick={(e) => handleOnglet("profile")}>Profile</button>
                                </li>
                                <li>
                                    <button onClick={(e) => handleOnglet("products")}>Products</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"right-content"}>
                    {currentOnglet === "profile" ? (
                        <ProviderProfile entity={entity} />
                    ) : (currentOnglet === "products" ? (
                        <ProviderProducts entityID={entity.id} />
                    ) : null)}
                </div>
            </div>
        </div>
    )
}