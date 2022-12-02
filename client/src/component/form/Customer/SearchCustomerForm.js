import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchCustomer } from "../../../redux/customers/selectors"

export default function SearchCustomerForm() {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchCustomer(search))
    }
    
    return (
        <form className={"search-form"} onSubmit={(e) => handleSubmit(e)}>
            <input 
                className={"form-field"}
                type={"text"} 
                value={search}
                placeholder={"Search a customer"}
                maxLength={255}
                onChange={(e) => handleChange(e)}
            />

            <button className={"form-button"} type={"submit"}>
                <img src={"/content/svg/magnifying-glass.svg"} alt="" />
            </button>
        </form>
    )
}