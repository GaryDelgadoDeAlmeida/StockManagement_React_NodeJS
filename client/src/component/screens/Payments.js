import React from "react";
import SalesChart from "../part/SalesChart";

export default function Payments() {
    return (
        <div className={"card-content silver"}>
            <div className={"-header"}>
                <h5>Payments</h5>
            </div>
            <div className={"-body"}>
                <SalesChart />
            </div>
        </div>
    )
}