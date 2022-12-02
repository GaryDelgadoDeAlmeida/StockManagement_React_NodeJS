import React from "react";
import NewProductForm from "../../form/Product/NewProductForm";
import ReturnButton from "../../part/ReturnButton";

export default function NewProduct() {
    
    return (
        <>
            {/* Return button */}
            <ReturnButton url={"/products"} />
            
            <div className={"card-content silver"}>
                <div className={"-header"}>
                    <h5>Product</h5>
                </div>
                <div className={"-body"}>
                    <NewProductForm />
                </div>
            </div>
        </>
    )
}