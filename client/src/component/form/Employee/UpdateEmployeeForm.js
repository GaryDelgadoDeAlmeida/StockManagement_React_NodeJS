import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../part/Notification";

export default function UpdateEmployeeForm({employeeID}) {
    const dispatch = useDispatch()
    const [notifMessage, setNotifMessage] = useState("")
    const [notifClassname, setNotifClassname] = useState("")
    
    const employee = useSelector(({employees}) => employees.filter((empl) => empl.id === employeeID)[0])
    if(!employee) {
        // TODO : return the user to employees page
    }

    const [firstname, setFirstname] = useState(employee ? employee.firstname : "")
    const [lastname, setLastname] = useState(employee ? employee.lastname : "")
    const [email, setEmail] = useState(employee ? employee.email : "")
    const [phone, setPhone] = useState(employee ? employee.phone : "")
    const [fax, setFax] = useState(employee ? employee.fax : "")
    const [address, setAddress] = useState(employee ? employee.address : "")
    const [zipCode, setZipCode] = useState(employee ? employee.zipCode : "")
    const [city, setCity] = useState(employee ? employee.city : "")
    const [country, setCountry] = useState(employee ? employee.country : "")

    const setResponse = (className, message) => {
        setNotifClassname(className)
        setNotifMessage(message)
    }

    const handleChange = (e, fieldName) => {
        let fieldValue = e.target.value

        switch(fieldName) {

            case "firstname":
                setFirstname(fieldValue)
                break

            case "lastname":
                setLastname(fieldValue)
                break

            case "email":
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
                setResponse("warning", `The field name ${fieldName} doesn't not exist`)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Hello handleSubmit")
    }

    return (
        <form className={"form"} onSubmit={(e) => handleSubmit(e)}>
            
            {notifMessage !== "" && (
                <Notification className={notifClassname} message={notifMessage} />
            )}

            <div className={"form-field"}>
                <label htmlFor={"firstname"}>Firstname</label>
                <input id={"firstname"} type={"text"} value={firstname} maxLength={255} onChange={(e) => handleChange(e, "firstname")} />
            </div>

            <div className={"form-field"}>
                <label htmlFor={"lastname"}>Lastname</label>
                <input id={"lastname"} type={"text"} value={lastname} maxLength={255} onChange={(e) => handleChange(e, "lastname")} />
            </div>

            <div className={"form-field"}>
                <label htmlFor={"email"}>Email</label>
                <input id={"email"} type={"email"} maxLength={255} onChange={(e) => handleChange(e, "email")} />
            </div>

            <div className={"form-field"}>
                <label htmlFor={"phone"}>Phone</label>
                <input id={"phone"} type={"tel"} pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"} maxLength={10} onChange={(e) => handleChange(e, "phone")} />
            </div>
            
            <div className={"form-field"}>
                <label htmlFor={"fax"}>Fax</label>
                <input id={"fax"} type={"tel"} pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"} maxLength={10} onChange={(e) => handleChange(e, "fax")} />
            </div>

            <div className={"form-field"}>
                <label htmlFor={"address"}>Address</label>
                <input id={"address"} type={"text"} maxLength={255} onChange={(e) => handleChange(e, "address")} />
            </div>

            <div className={"form-field"}>
                <label htmlFor={"zipCode"}>Zip Code</label>
                <input id={"zipCode"} type={"text"} maxLength={10} onChange={(e) => handleChange(e, "zipCode")} />
            </div>

            <div className={"form-field"}>
                <label htmlFor={"city"}>City</label>
                <input id={"city"} type={"text"} maxLength={255} onChange={(e) => handleChange(e, "city")} />
            </div>

            <div className={"form-field"}>
                <label htmlFor={"country"}>Country</label>
                <input id={"country"} type={"text"} maxLength={255} onChange={(e) => handleChange(e, "country")} />
            </div>
            
            <div className={"form-button"}>
                <button type={"reset"}>Reset</button>
                <button type={"submit"}>Submit</button>
            </div>
        </form>
    )
}