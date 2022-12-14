import React, { useEffect } from "react"
import { useFetchAPI } from "../hooks/entity"
import DynamicTime from "../part/DynamicTime"

export default function Home() {
    const {entities: lowStorage, load, loading} = useFetchAPI("/api/product/low-storage")
    
    useEffect(() => {
        load()
    }, [])

    return (
        <div className={"home"}>
            <div className={"card-content"}>
                <div className={"-body"}>
                    <div className={"card-row"}>
                        
                        {/* Clients */}
                        <div className={"card"}>
                            <div className={"-head"}>
                                <span>Clients</span>
                            </div>
                            <div className={"-content"}>
                                <div className={"-img"}>
                                    <img src={"/content/svg/users.svg"} alt={""} />
                                </div>
                                <div className={"-numbers"}>
                                    <span>15 485</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Employees */}
                        <div className={"card"}>
                            <div className={"-head"}>
                                <span>Employees</span>
                            </div>
                            <div className={"-content"}>
                                <div className={"-img"}>
                                    <img src={"/content/svg/address-card.svg"} alt={""} />
                                </div>
                                <div className={"-numbers"}>
                                    <span>170</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Providers */}
                        <div className={"card"}>
                            <div className={"-head"}>
                                <span>Providers</span>
                            </div>
                            <div className={"-content"}>
                                <div className={"-img"}>
                                    <img src={"/content/svg/truck.svg"} alt={""} />
                                </div>
                                <div className={"-numbers"}>
                                    <span>124</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Products */}
                        <div className={"card"}>
                            <div className={"-head"}>
                                <span>Products</span>
                            </div>
                            <div className={"-content"}>
                                <div className={"-img"}>
                                    <img src={"/content/svg/laptop.svg"} alt={""} />
                                </div>
                                <div className={"-numbers"}>
                                    <span>131 928</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Commands */}
                        <div className={"card"}>
                            <div className={"-head"}>
                                <span>Commands</span>
                            </div>
                            <div className={"-content"}>
                                <div className={"-img"}>
                                    <img src={"/content/svg/cart-shopping.svg"} alt={""} />
                                </div>
                                <div className={"-numbers"}>
                                    <span>15 485</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Profits */}
                        <div className={"card"}>
                            <div className={"-head"}>
                                <span>Profits</span>
                            </div>
                            <div className={"-content"}>
                                <div className={"-img"}>
                                    <img src={"/content/svg/sack-dollar.svg"} alt={""} />
                                </div>
                                <div className={"-numbers"}>
                                    <span>1 852 871</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={"drow"}>
                <div className={"card-content silver"}>
                    <div className={"-header"}>
                        <h5>Low storage products</h5>
                    </div>
                    
                    <div className={"-body"}>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Product name</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!loading ? (
                                    lowStorage.length > 0 ? (
                                        lowStorage.map((product, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td className={"_ID"}>{product.id}</td>
                                                    <td className={"_product_name"}>{product.name}</td>
                                                    <td className={"_stock"}>{product.stock}</td>
                                                </tr>
                                            )
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan={3}>There is no product</td>
                                        </tr>
                                    )
                                ) : (
                                    <tr>
                                        <td colSpan={3}>Loading ...</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <DynamicTime />
            </div>
        </div>
    )
}