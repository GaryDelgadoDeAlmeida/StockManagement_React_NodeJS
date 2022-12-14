import React, { useEffect } from "react";
import { useFetchAPI } from "../../hooks/entity";
import { Link, useParams, useNavigate, createPath } from "react-router-dom";
import ReturnButton from "../../part/ReturnButton";

export default function SingleProduct() {
    const { productID } = useParams()
    const navigate = useNavigate()
    const { entities: product, load, loading } = useFetchAPI("/api/product/" + productID)

    useEffect(() => {
        load()
    }, [])

    useEffect(() => {
        if(!loading && product.length === 0) {
            navigate("/products")
            return
        }
    })

    return (
        <>
            <ReturnButton url={"/products"} />
            
            <div className={"card-content silver"}>
                <div className={"-body drow"}>
                    <div className={"left w-25"}>
                        <img src={product.imgPath} alt={product.name} />
                    </div>
                    <div className={"right w-75"}>
                        <h3 className={"product-title"}>{product.name}</h3>
                        
                        <div className={"price"}>
                            <span>{product.price} €</span>
                        </div>
                        
                        <Link to={`/products/${productID}/edit`}>
                            <button className={"btn btn-primary"}>
                                <img src={"/content/svg/pencil.svg"} alt={""} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={"card-content silver"}>
                <div className={"-header"}>
                    <h5>Description</h5>
                </div>
                <div className={"-body"}>
                    <p>{product.description}</p>
                </div>
            </div>
            
            <div className={"card-content silver"}>
                <div className={"-header"}>
                    <h5>Caracteristics</h5>
                </div>
                <div className={"-body"}>
                    <table>
                        <tbody>
                            {[undefined, null].indexOf(product.caracteristics) === -1 ? (
                                product.caracteristics.length > 0 ? (
                                    product.caracteristics.map((caracteristic, i) => {
                                        return (
                                            <tr key={i}>
                                                <td className={`txt-left _${caracteristic.label}`}>{caracteristic.label}</td>
                                                <td className={"txt-left"}>{caracteristic.description}</td>
                                            </tr>
                                        )
                                    })
                                ) : null
                            ) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}