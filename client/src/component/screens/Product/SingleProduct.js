import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReturnButton from "../../part/ReturnButton";

export default function SingleProduct({productID}) {
    const product = useSelector(({products}) => products.filter((prd) => prd.id === productID)[0])
    console.log(product)

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
                            {product.caracteristics.map((caracteristic, i) => {
                                return (
                                    <tr key={i}>
                                        <td className={`txt-left _${caracteristic.label}`}>{caracteristic.label}</td>
                                        <td className={"txt-left"}>{caracteristic.description}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}