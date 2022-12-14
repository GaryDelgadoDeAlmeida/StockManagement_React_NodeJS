import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../../redux/employee/selectors";
import { findSpecificParent } from "../../functions";
import SearchEmployeeForm from "../form/Employee/SearchEmployeeForm";

export default function Employees() {
    const dispatch = useDispatch()
    const employees = useSelector(({employees}) => employees)

    const handleRemove = (e) => {
        let employeeID = e.target.getAttribute("data-employeeid")
        employeeID = (employeeID === null ? findSpecificParent(e.target, "remove").getAttribute("data-employeeid") : employeeID)
        
        if(employeeID === null) {
            return
        }

        dispatch(deleteEmployee(employeeID))
    }

    return (
        <div className={"card-content silver"}>
            <div className={"-header"}>
                <div className={"-left-content"}>
                    <h5>Employees</h5>
                    
                    <Link to={"/employees/new"} className={"btn"}>
                        <button className={"btn btn-outline-green"}>
                            <img src={"/content/svg/plus.svg"} alt="" />
                        </button>
                    </Link>
                </div>
                
                <div className={"-rigth-content"}>
                    <SearchEmployeeForm />
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
                            <th>Address</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.length > 0 ? (
                            employees.map((employee, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{employee.id}</td>
                                        <td>{employee.firstname}</td>
                                        <td>{employee.lastname}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.address}, {employee.zipCode} {employee.city}, {employee.country}</td>
                                        <td>
                                            <Link to={`/employees/${employee.id}`}>
                                                <img src={"/content/svg/pencil.svg"} alt={""} />
                                            </Link>
    
                                            <button className={"remove"} data-employeeid={employee.id} onClick={(e) => handleRemove(e)}>
                                                <img src="/content/svg/trash.svg" alt="" />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr>
                                <td colSpan={6}>There is no employee</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                
                <div className={"pagination"}>
                    <div className={"pagination-wrapper"}>
                        <div className={"link"}>
                            <Link to={"/employee?page=1"}>
                                <img src={"/content/svg/angles-left.svg"} alt="" />
                            </Link>
                        </div>
                        <div className={"link"}>
                            <Link to={"/employee?page=1"}>
                                <span>1</span>
                            </Link>
                        </div>
                        <div className={"link current"}>
                            <span>2</span>
                        </div>
                        <div className={"link"}>
                            <Link to={"/employee?page=3"}>
                                <span>3</span>
                            </Link>
                        </div>
                        <div className={"link"}>
                            <Link to={"/employee?page=3"}>
                                <img src={"/content/svg/angles-right.svg"} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}