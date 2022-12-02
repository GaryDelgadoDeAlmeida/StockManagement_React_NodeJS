import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Notification from "../../part/Notification";
import { addCustomer } from "../../../redux/customers/selectors";
import { checkEmail, checkMaxCharacters, returnCountries } from "../../../functions";

export default function NewCustomerForm() {
    const dispatch = useDispatch()
    const countries = returnCountries()
    const [notifMessage, setNotifMessage] = useState("")
    const [notifClassname, setNotifClassname] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [fax, setFax] = useState("")
    const [address, setAddress] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")

    const setResponse = (className, message) => {
        setNotifClassname(className)
        setNotifMessage(message)
    }

    const handleChange = (e, fieldName) => {
        let fieldValue = e.target.value
        setResponse("", "")

        switch(fieldName) {
            case "firstname":
                if(!checkMaxCharacters(fieldValue, 100)) {
                    setResponse("warning", "The firstname character lenght must be inferior to 100")
                    return
                }

                setFirstname(fieldValue)
                break

            case "lastname":
                if(!checkMaxCharacters(fieldValue, 130)) {
                    setResponse("warning", "The lastname character lenght must be inferior to 130")
                    return
                }

                setLastname(fieldValue)
                break

            case "email":
                if(!checkEmail(fieldValue)) {
                    setResponse("warning", "The given email address is not valid")
                    return
                }

                setEmail(fieldValue)
                break

            case "phone":
                setPhone(fieldValue)
                break

            case "fax":
                setFax(fieldValue)
                break

            case "address":
                setAddress(fieldValue)
                break

            case "zipCode":
                setZipCode(fieldValue)
                break

            case "city":
                setCity(fieldValue)
                break

            case "country":
                setCountry(fieldValue)
                break

            default:
                setResponse("danger", `The field name ${fieldName} isn't allowed`)
                return
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addCustomer({
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            fax: fax,
            address: address,
            zipCode: zipCode,
            city: city,
            country: country
        }))
    }

    return (
        <form className={"form"} onSubmit={(e) => handleSubmit(e)}>
            
            {notifMessage !== "" && (
                <Notification className={notifClassname} message={notifMessage} />
            )}
            
            <div className={"form-field"}>
                <label>Firstname</label>
                <input type={"text"} onChange={(e) => handleChange(e, "firstname")} />
            </div>
            
            <div className={"form-field"}>
                <label>Lastname</label>
                <input type={"text"} onChange={(e) => handleChange(e, "lastname")} />
            </div>
            
            <div className={"form-field"}>
                <label>Email</label>
                <input type={"email"} onChange={(e) => handleChange(e, "email")} />
            </div>
            
            <div className={"form-field"}>
                <label>Phone</label>
                <input type={"phone"} onChange={(e) => handleChange(e, "phone")} />
            </div>
            
            <div className={"form-field"}>
                <label>Address</label>
                <input type={"text"} onChange={(e) => handleChange(e, "address")} />
            </div>
            
            <div className={"form-field"}>
                <label>Zip code</label>
                <input type={"text"} onChange={(e) => handleChange(e, "zipCode")} />
            </div>
            
            <div className={"form-field"}>
                <label>City</label>
                <input type={"text"} onChange={(e) => handleChange(e, "city")} />
            </div>
            
            <div className={"form-field"}>
                <label>Country</label>
                <select onChange={(e) => handleChange(e, "country")}>
                    <option>Select a country</option>
                    {countries.map((country, i) => {
                        return (
                            <>
                                <option key={i} value={country.code}>{country.name}</option>
                            </>
                        )
                    })}
                </select>
            </div>
            
            <div className={"form-button"}>
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}