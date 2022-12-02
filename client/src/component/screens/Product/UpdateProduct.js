import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditProductForm from "../../form/Product/EditProductForm";
import ReturnButton from "../../part/ReturnButton";

export default function UpdateProduct({productID}) {
    const navigate = useNavigate()
    const product = useSelector(({products}) => products.filter((product) => product.id === productID))

    useEffect(() => {
        if(product.length === 0) {
            navigate("/products")
        }
    })

    return (
        <>
            <ReturnButton url={`/products/${productID}`} />
            
            <div className={"card-content silver"}>
                <div className={"-body"}>    
                    <EditProductForm productID={productID} />
                </div>
            </div>
        </>
    )
}