import React from "react";
import { useSelector } from "react-redux";

export default function LowStorageProductList() {
    const lowStorageProducts = useSelector(({products}) => products.filter(product => product.stock <= 5))

    return (
        <>
            {lowStorageProducts.map((product, i) => {
                return (
                    <tr key={i}>
                        <td className={"_ID"}>{product.id}</td>
                        <td className={"_product_name"}>{product.name}</td>
                        <td className={"_stock"}>{product.stock}</td>
                    </tr>
                )
            })}
        </>
    )
}