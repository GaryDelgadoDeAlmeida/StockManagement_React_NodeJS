import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import SearchProductForm from "../form/Product/SearchProductForm"
import { useFetchAPI } from "../hooks/entity"
import { deleteProductAction } from "../../redux/product/selectors";
import { findSpecificParent } from "../../functions";

export default function Products() {
    const {entities: products, load, loading} = useFetchAPI("/api/product")
    // const dispatch = useDispatch();

    const handleRemove = (e) => {
        let productID = e.target.getAttribute("data-productid")
        productID = (productID === null ? findSpecificParent(e.target, "remove", true).getAttribute("data-productid") : productID)
        
        if(productID !== null) {
            // dispatch(deleteProductAction(productID))
        }
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <div className={"card-content silver"}>
            <div className={"-header"}>
                <div className={"-left-content"}>
                    <h5>Products</h5>
                    
                    <Link to={"/products/new"} className={"btn"}>
                        <button className={"btn btn-outline-green"}>
                            <img src={"/content/svg/plus.svg"} alt="" />
                        </button>
                    </Link>
                </div>

                <div className={"-right-content"}>
                    <SearchProductForm />
                </div>
            </div>

            
            <div className={"-body"}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Brands</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading === false ? (
                            products.length > 0 ? (
                                products.map((product, i) => {
                                    return (
                                        <tr key={i}>
                                            <td className={"_ID"}>{product.id}</td>
                                            <td className={"_brands"}>{product.entity_id_id}</td>
                                            <td className={"_product_name"}>{product.name}</td>
                                            <td className={"_description"}>{product.description}</td>
                                            <td className={"_stock"}>{product.stock}</td>
                                            <td className={"_price"}>{product.price}</td>
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
                                    <td colSpan={7}>There is no product</td>
                                </tr>
                            )
                        ) : (
                            <tr>
                                <td className={"_no_results"} colSpan={7}>Loading ...</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className={"pagination"}>
                    <div className={"pagination-wrapper"}>
                        <div className={"link"}>
                            <Link to={"/products?page=1"}>
                                <img src={"/content/svg/angles-left.svg"} alt="" />
                            </Link>
                        </div>
                        <div className={"link"}>
                            <Link to={"/products?page=1"}>
                                <span>1</span>
                            </Link>
                        </div>
                        <div className={"link current"}>
                            <span>2</span>
                        </div>
                        <div className={"link"}>
                            <Link to={"/products?page=3"}>
                                <span>3</span>
                            </Link>
                        </div>
                        <div className={"link"}>
                            <Link to={"/products?page=3"}>
                                <img src={"/content/svg/angles-right.svg"} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}