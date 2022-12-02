import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { deleteProductAction } from "../../redux/product/selectors";
import { findSpecificParent } from "../../functions";

export default function ProductList({products}) {
    const dispatch = useDispatch();

    const handleRemove = (e) => {
        let productID = e.target.getAttribute("data-productid")
        productID = (productID === null ? findSpecificParent(e.target, "remove", true).getAttribute("data-productid") : productID)
        
        if(productID !== null) {
            dispatch(deleteProductAction(productID))
        }
    }

    return (
        <>
            {products.length > 0 ? (
                products.map((product, i) => {
                    return (
                        <tr key={i}>
                            <td className={"_ID"}>{product.id}</td>
                            <td className={"_category"}>{product.category}</td>
                            <td className={"_brands"}>{product.brands}</td>
                            <td className={"_model"}>{product.model}</td>
                            <td className={"_classification"}>{product.classification}</td>
                            <td>{product.subClassfication}</td>
                            <td className={"_description"}>{product.description}</td>
                            <td>
                                <Link to={`/products/${product.id}/edit`}>
                                    <img src="/content/svg/pencil.svg" alt="" />
                                </Link>

                                <button className={"remove"} data-productid={product.id} onClick={(e) => handleRemove(e)}>
                                    <img src="/content/svg/trash.svg" alt="" />
                                </button>
                            </td>
                        </tr>
                    )
                })
            ) : (
                <tr>
                    <td colSpan={8}>There is no product</td>
                </tr>
            )}
        </>
    )
}