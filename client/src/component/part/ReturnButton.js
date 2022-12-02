import React from "react";
import { Link } from "react-router-dom";

export default function ReturnButton({url}) {

    return (
        <Link to={url}>
            <button className={"btn btn-outline-blue btn-return"}>
                <img src={"/content/svg/arrow-left-long.svg"} alt={""} />
                <span>Return</span>
            </button>
        </Link>
    )
}