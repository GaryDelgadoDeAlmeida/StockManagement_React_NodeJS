import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchProviderForm from "../form/Provider/SearchProviderForm";
import { useFetchAPI } from "../hooks/entity";

export default function Providers() {
    const {entities, load, loading} = useFetchAPI("/api/entity");

    useEffect(() => {
        load()
    }, [])

    return (
        <div className={"card-content silver"}>
            <div className={"-header"}>
                <div className={"-left-content"}>
                    <h5>Provider</h5>
                    
                    <Link to={"/providers/new"} className={"btn"}>
                        <button className={"btn btn-outline-green"}>
                            <img src={"/content/svg/plus.svg"} alt="" />
                        </button>
                    </Link>
                </div>
                <div className={"-right-content"}>
                    <SearchProviderForm />
                </div>
            </div>

            <div className={"-body"}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>SIREN</th>
                            <th>SIRET</th>
                            <th>Address</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading === false ? (
                            entities.length > 0 ?
                                entities.map((entity, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{entity.name}</td>
                                            <td>{entity.siren}</td>
                                            <td>{entity.siret}</td>
                                            <td>{entity.address}, {entity.zipCode} {entity.city}, {entity.country}</td>
                                            <td>
                                                <Link to={`/providers/${entity.id}`}>
                                                    <img src={"/content/svg/pencil.svg"} alt={""} />
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            : (
                                <tr>
                                    <td colSpan={5}>No provider has been found</td>
                                </tr>
                            )
                        ) : (
                            <tr>
                                <td colSpan={5}>Loading ...</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className={"pagination"}>
                    <div className={"pagination-wrapper"}>
                        <div className={"link"}>
                            <Link to={"/providers?page=1"}>
                                <img src={"/content/svg/angles-left.svg"} alt="" />
                            </Link>
                        </div>
                        <div className={"link"}>
                            <Link to={"/providers?page=1"}>
                                <span>1</span>
                            </Link>
                        </div>
                        <div className={"link current"}>
                            <span>2</span>
                        </div>
                        <div className={"link"}>
                            <Link to={"/providers?page=3"}>
                                <span>3</span>
                            </Link>
                        </div>
                        <div className={"link"}>
                            <Link to={"/providers?page=3"}>
                                <img src={"/content/svg/angles-right.svg"} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}