import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchEmployee } from "../../../redux/employee/selectors";

export default function SearchEmployeeForm() {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchEmployee(search))
    }

    return (
        <form className={"search-form"} onSubmit={(e) => handleSubmit(e)}>
            <input 
                className={"form-field"}
                type={"text"} 
                onChange={(e) => handleChange(e)} 
                maxLength={255}
                value={search}
                placeholder={"Search an employee"}
            />
            <button className={"form-button"} type={"submit"}>
                <img src={"/content/svg/magnifying-glass.svg"} alt="" />
            </button>
        </form>
    )
}