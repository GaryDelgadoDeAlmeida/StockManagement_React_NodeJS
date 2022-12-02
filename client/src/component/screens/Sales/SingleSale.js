import React from "react";
import { useSelector } from "react-redux";
import ReturnButton from "../../part/ReturnButton";

export default function SingleSale({saleID}) {
    const sale = useSelector(({orders}) => orders.filter((order) => order.id === saleID)[0])

    console.log(sale)

    return (
        <>
            <ReturnButton url={"/sales"} />

            <div className={"card-content silver"}>
                <div className={"-header"}>
                    <h5>Order</h5>
                </div>
                <div className={"-body"}>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}