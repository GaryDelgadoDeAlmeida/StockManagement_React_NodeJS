import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkMaxCharacters } from "../../../functions"

export default function SearchProductForm() {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        let fieldValue = e.target.value
        
        if(!checkMaxCharacters(fieldValue, 255)) {
            return
        }

        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Hello handleSubmit")
    }
    
    return (
        <form className={"search-form"} onSubmit={(e) => handleSubmit(e)}>
            <input 
                className={"form-field"}
                type={"text"} 
                maxLength={"255"} 
                placeholder={"Search a product"} 
                value={search} 
                onChange={(e) => handleChange(e)} 
            />
            <button className={"form-button"} type={"submit"}>
                <img src={"/content/svg/magnifying-glass.svg"} alt="" />
            </button>
        </form>
    )
}