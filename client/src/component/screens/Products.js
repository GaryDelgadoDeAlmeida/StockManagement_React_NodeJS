import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import SearchProductForm from "../form/Product/SearchProductForm"
import { useFetchAPI } from "../hooks/entity"
import ProductList from "../part/ProductList"

export default function Products() {
    const {entities: products, load, loading} = useFetchAPI("https://127.0.0.1:8000/api/product")

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
                            <th>Category</th>
                            <th>Brands</th>
                            <th>Model</th>
                            <th>Classification</th>
                            <th>Sub classification</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading === false ? (
                            <ProductList products={products} />
                        ) : (
                            <tr>
                                <td className={"_no_results"} colSpan={8}>Loading ...</td>
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