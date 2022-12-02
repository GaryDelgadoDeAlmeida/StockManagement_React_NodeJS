import React from "react";
import { Link } from "react-router-dom";
import NewEmployeeForm from "../../form/Employee/NewEmployeeForm";
import ReturnButton from "../../part/ReturnButton";

export default function NewEmployee() {

    return (
        <div className={"employee"}>
            <div className={"employee-new"}>
                <ReturnButton url={"/employees"} />
                <NewEmployeeForm />
            </div>
        </div>
    )
}