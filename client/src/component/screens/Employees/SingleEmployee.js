import React from "react";
import UpdateEmployeeForm from "../../form/Employee/UpdateEmployeeForm";
import ReturnButton from "../../part/ReturnButton";

export default function SingleEmployee({employeeID}) {

    return (
        <>
            <ReturnButton url={"/employees"} />
            
            <div className={"card-content silver"}>
                <div className={"-body"}>
                    <UpdateEmployeeForm employeeID={employeeID} />
                </div>
            </div>
        </>
    )
}