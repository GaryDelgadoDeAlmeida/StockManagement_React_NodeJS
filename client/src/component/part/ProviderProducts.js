import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useFetchAPI } from "../hooks/entity"

export default function ProviderProducts({entityID}) {
    const { entities: products, load, loading} = useFetchAPI("/api/entity/" + entityID + "/products")

    useEffect(() => {
        load()
    }, [])
    
    return (
        <div className={"provider-products card-content silver"}>
            <div className={"-header"}>
                <h5>Products</h5>
            </div>
            <div className={"-body"}>
                <table>
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading ? (
                            products.length > 0 ? (
                                products.map((product, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{product.name}</td>
                                            <td>{product.stock}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <Link to={`/products/${product.id}`}>
                                                    <img src="/content/svg/eye.svg" alt="" />
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan={4}>There is no product</td>
                                </tr>
                            )
                        ) : (
                            <tr>
                                <td colSpan={4}>Loading ...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}