import React from "react";
import { useSelector } from "react-redux";

export default function SaleList() {
    const sales = useSelector(({sales}) => sales)
    const customers = useSelector(({customers}) => customers)

    return (
        <>
            {sales.map((sale, i) => {
                let customer = customers.filter((client) => client.id === sale.customer)
                return (
                    <tr>
                        <td>{sale.id}</td>
                        <td>{customer.firstname} {customer.lastname}</td>
                        <td>{!sale.paid ? "Ongoing" : "Paid"}</td>
                        <td></td>
                        <td></td>
                    </tr>
                )
            })}
        </>
    )
}