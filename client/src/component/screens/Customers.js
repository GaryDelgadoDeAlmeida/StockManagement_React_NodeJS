import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchCustomerForm from "../form/Customer/SearchCustomerForm";
import { useFetchAPI } from "../hooks/entity";

export default function Customers() {
    const {entities: customers, load, loading} = useFetchAPI("/api/customer")

    useEffect(() => {
        load()
    }, [])

    return (
        <div className={"card-content silver"}>
            <div className={"-header"}>
                <div className={"-left-content"}>
                    <h5>Customers</h5>
                </div>
                <div className={"-right-content"}>
                    <SearchCustomerForm />
                </div>
            </div>

            <div className={"-body"}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading === false ? (
                            customers.length > 0 ? (
                                customers.map((customer, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{customer.id}</td>
                                            <td>{customer.firstname}</td>
                                            <td>{customer.lastname}</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.phone}</td>
                                            <td>{customer.address}, {customer.city} {customer.zipCode}, {customer.country}</td>
                                            <td>
                                                <Link to={`/customers/${customer.id}`}>
                                                    <img src={"/content/svg/eye.svg"} alt={"profil"} />
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan={7}>Il n'y a aucun clients</td>
                                </tr>
                            )) 
                        : (
                            <tr>
                                <td colSpan={7}>Loading ...</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className={"pagination"}>
                    <div className={"pagination-wrapper"}>
                        <div className={"link"}>
                            <Link to={"/customers?page=1"}>
                                <img src={"/content/svg/angles-left.svg"} alt="" />
                            </Link>
                        </div>
                        <div className={"link"}>
                            <Link to={"/customers?page=1"}>
                                <span>1</span>
                            </Link>
                        </div>
                        <div className={"link current"}>
                            <span>2</span>
                        </div>
                        <div className={"link"}>
                            <Link to={"/customers?page=3"}>
                                <span>3</span>
                            </Link>
                        </div>
                        <div className={"link"}>
                            <Link to={"/customers?page=3"}>
                                <img src={"/content/svg/angles-right.svg"} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}