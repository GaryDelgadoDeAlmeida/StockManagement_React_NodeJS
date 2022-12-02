import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchEntityAction } from "../../../redux/entity/selectors"

export default function SearchProviderForm() {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchEntityAction(search))
    }
    
    return (
        <form className={"search-form"} onSubmit={(e) => handleSubmit(e)}>
            <input 
                className={"form-field"}
                type={"text"} 
                maxLength={255}
                placeholder={"Search a provider"}
                value={search}
                onChange={(e) => handleChange(e)}
            />
            <button className={"form-button"} type={"submit"}>
                <img src={"/content/svg/magnifying-glass.svg"} alt="" />
            </button>
        </form>
    )
}