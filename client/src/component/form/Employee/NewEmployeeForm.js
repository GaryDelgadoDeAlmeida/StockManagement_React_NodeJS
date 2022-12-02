import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../../redux/employee/selectors";
import Notification from "../../part/Notification";

export default function NewEmployeeForm() {
    const dispatch = useDispatch()
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
        setResponse("", "")
        let fieldValue = e.target.value

        switch(fieldName) {
            case "firstname":
                setFirstname(fieldValue)
                break;
            case "lastname":
                setLastname(fieldValue)
                break;
            case "email":
                setEmail(fieldValue)
                break;
            case "phone":
                setPhone(fieldValue)
                break
            case "fax":
                setFax(fieldValue)
                break
            case "address":
                setAddress(fieldValue)
                break
            case "zip_code":
                setZipCode(fieldValue)
                break
            case "city":
                setCity(fieldValue)
                break
            case "country":
                setCountry(fieldValue)
                break
            default:
                setResponse("warning", `The field ${fieldName} doesn't exist`)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Send the request to the backend
        dispatch(addEmployee({
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

        // Return a response to the user
        setResponse("success", "The new employee has been successfully added")
    }

    return (
        <form className={"form"} onSubmit={(e) => handleSubmit(e)}>

            {notifMessage !== "" && (
                <Notification className={notifClassname} message={notifMessage} />
            )}

            <div className={"form-field"}>
                <label>Firstname</label>
                <input type={"text"} maxLength={"255"} onChange={(e) => handleChange(e, "firstname")} />
            </div>
            
            <div className={"form-field"}>
                <label>Lastname</label>
                <input type={"text"} maxLength={"255"} onChange={(e) => handleChange(e, "lastname")} />
            </div>
            
            <div className={"form-field"}>
                <label>Email</label>
                <input type={"email"} maxLength={"255"} onChange={(e) => handleChange(e, "email")} />
            </div>

            <div className={"form-field"}>
                <label>Phone</label>
                <input type={"phone"} maxLength={"10"} onChange={(e) => handleChange(e, "phone")} />
            </div>

            <div className={"form-field"}>
                <label>Fax</label>
                <input type={"phone"} maxLength={"10"} onChange={(e) => handleChange(e, "fax")} />
            </div>
            
            <div className={"form-field"}>
                <label>Address</label>
                <input type={"text"} maxLength={"255"} onChange={(e) => handleChange(e, "address")} />
            </div>
            
            <div className={"form-field"}>
                <label>Zip Code</label>
                <input type={"text"} maxLength={"5"} onChange={(e) => handleChange(e, "zip_code")} />
            </div>
            
            <div className={"form-field"}>
                <label>City</label>
                <input type={"text"} maxLength={"255"} onChange={(e) => handleChange(e, "city")} />
            </div>
            
            <div className={"form-field"}>
                <label>Country</label>
                <input type={"text"} maxLength={"255"} onChange={(e) => handleChange(e, "country")} />
            </div>
            
            <div className={"form-button"}>
                <button type={"submit"}>Submit</button>
            </div>
        </form>
    )
}