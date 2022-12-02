import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Sales() {
    const customers = useSelector(({customers}) => customers)
    const sales = useSelector(({orders}) => orders.filter((order) => order.status !== "DELIVERED"))

    const findCustomer = (customerID) => {
        return customers.filter((customer) => customer.id === customerID)[0]
    }

    return (
        <>
            <div className={"card-content silver"}>
                <div className={"widget"}>
                        
                    {/* widget 1 */}
                    <div className={"widget-content"}>
                        <div className={"widget-left"}>
                            <span className={"widget-numbers c-green"}>1896</span>
                        </div>
                        <div className={"widget-right"}>
                            <h5 className={"widget-title"}>Total orders</h5>
                            <p className={"widget-info"}>Current year expenses</p>
                        </div>
                    </div>

                    {/* widget 2 */}
                    <div className={"widget-content"}>
                        <div className={"widget-left"}>
                            <span className={"widget-numbers c-yellow"}>189</span>
                        </div>
                        <div className={"widget-right"}>
                            <h5 className={"widget-title"}>Ongoing orders</h5>
                            <p className={"widget-info"}>Current orders still delivering</p>
                        </div>
                    </div>

                    {/* widget 3 */}
                    <div className={"widget-content"}>
                        <div className={"widget-left"}>
                            <span className={"widget-numbers c-red"}>14 M</span>
                        </div>
                        <div className={"widget-right"}>
                            <h5 className={"widget-title"}>Products sold (€)</h5>
                            <p className={"widget-info"}>Current year total profits</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"drow"}>
                <div className={"card-content silver h-400p"}>
                    <div className={"-header"}>
                        <h5>Ongoing orders</h5>
                    </div>
                    <div className={"-body"}>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Customer</th>
                                    <th>Paid</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {sales.map((sale, i) => {
                                    let customer = findCustomer(sale.customerID)
                                    return (
                                        <tr key={i}>
                                            <td>{sale.id}</td>
                                            <td>{customer.firstname} {customer.lastname}</td>
                                            <td>{sale.paid === true ? "Yes" : "No"}</td>
                                            <td className={"_status"}>
                                                <span className={"badge success"}>{sale.status}</span>
                                            </td>
                                            <td>{sale.createdAt.toLocaleDateString("en-US")}</td>
                                            <td>
                                                <Link to={`/sales/${sale.id}`}>
                                                    <img src={"/content/svg/eye.svg"} alt={""} />
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        
                        <Link to={"/sales/ongoing-orders"} className={"btn btn-primary"}>See more</Link>
                    </div>
                </div>
                
                <div className={"card-content silver"}>
                    <div className={"-header"}>
                        <h5>Best selling products</h5>
                    </div>
                    <div className={"-body"}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={""} alt={""} />
                                    </td>
                                    <td>
                                        <span>Computer</span>
                                        <small>800 €</small>
                                    </td>
                                    <td>
                                        <span>200</span>
                                        <small>sold</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={""} alt={""} />
                                    </td>
                                    <td>
                                        <span>Computer</span>
                                        <small>800 €</small>
                                    </td>
                                    <td>
                                        <span>200</span>
                                        <small>sold</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={""} alt={""} />
                                    </td>
                                    <td>
                                        <span>Computer</span>
                                        <small>800 €</small>
                                    </td>
                                    <td>
                                        <span>200</span>
                                        <small>sold</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={""} alt={""} />
                                    </td>
                                    <td>
                                        <span>Computer</span>
                                        <small>800 €</small>
                                    </td>
                                    <td>
                                        <span>200</span>
                                        <small>sold</small>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <div className={"drow"}>
                <div className={"card-content silver"}>
                    <div className={"-header"}>
                        <h5>Top seller</h5>
                    </div>
                    <div className={"-body h-400p"}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={"/content/images/logo.png"} alt={""} />
                                    </td>
                                    <td className={"txt-left"}>Garry Almeida</td>
                                    <td>1000 €</td>
                                    <td>
                                        <Link to={"/customers/1"}>
                                            <img src={"/content/svg/eye.svg"} alt={""} />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={"/content/images/logo.png"} alt={""} />
                                    </td>
                                    <td className={"txt-left"}>Garry Almeida</td>
                                    <td>1000 €</td>
                                    <td>
                                        <Link to={"/customers/1"}>
                                            <img src={"/content/svg/eye.svg"} alt={""} />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={"/content/images/logo.png"} alt={""} />
                                    </td>
                                    <td className={"txt-left"}>Garry Almeida</td>
                                    <td>1000 €</td>
                                    <td>
                                        <Link to={"/customers/1"}>
                                            <img src={"/content/svg/eye.svg"} alt={""} />
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className={"card-content"}></div>
            </div>
        </>
    )
}