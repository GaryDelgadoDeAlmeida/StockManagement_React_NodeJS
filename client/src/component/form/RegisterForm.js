import React, { useState } from "react";
import { checkEmail, checkLimitCharacters, checkPassword, checkUniquePseudo } from "../../functions";
import Notification from "../part/Notification";

/**
 * Register a new user to the application
 */
export default function RegisterForm() {
    const [notifMessage, setNotifMessage] = useState("")
    const [notifClassname, setNotifClassname] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [pseudo, setPseudo] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const setResponse = (className, message) => {
        setNotifClassname(className)
        setNotifMessage(message)
    }

    const handleChange = (e, fieldName) => {
        let fieldValue = e.target.value
        setNotifMessage("")
        setNotifClassname("")
        
        switch(fieldName) {
            case "firstname":
            case "lastname":

                // if the limitation of characters length is respected
                if(!checkLimitCharacters(fieldValue, 2, 255)) {
                    setResponse("warning", `The ${fieldName} isn't valid. The ${fieldName} must be higher than 2 characters and inferior to 255 characters`)
                    return
                }

                if(fieldName === "fistname") {
                    setFirstname(fieldValue)
                } else {
                    setLastname(fieldValue)
                }

                break

            case "email":
                if(!checkLimitCharacters(fieldValue, 6, 255)) {
                    setResponse("warning", `The ${fieldName} must be higher than 6 characters and inferior to 255 characters`)
                    return
                }

                if(!checkEmail(fieldValue)) {
                    setResponse("warning", "The email isn't valid")
                    return
                }

                setEmail(fieldValue)
                break

            case "pseudo":
                if(!checkLimitCharacters(fieldValue, 1, 50)) {
                    setResponse("warning", `The ${fieldName} must at least have a value and maximum 50 characters`)
                    return
                }

                if(checkUniquePseudo(fieldValue)) {
                    setResponse("warning", `The ${fieldName} '${fieldValue}' is already used.`)
                    return
                }

                setPseudo(fieldValue)
                break

            case "password":
                if(!checkPassword(fieldValue, 100)) {
                    setResponse("warning", "The password isn't secure.")
                    return
                }

                setPassword(fieldValue)
                break

            case "confirmPassword":
                setConfirmPassword(fieldValue)
                break

            default:
                break
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(password !== confirmPassword) {
            setResponse("danger", "The password and the confirmation of the password are diffirents.")
            return
        }

        setResponse("success", `The profile ${pseudo} has been successfully created.`)
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
                <label>Email address</label>
                <input type={"email"} maxLength={"255"} onChange={(e) => handleChange(e, "email")} />
            </div>
            
            <div className={"form-field"}>
                <label>Pseudo</label>
                <input type={"text"} maxLength={"50"} onChange={(e) => handleChange(e, "pseudo")} />
            </div>
            
            <div className={"form-field"}>
                <label>Password</label>
                <input type={"password"} maxLength={"100"} onChange={(e) => handleChange(e, "password")} />
            </div>
            
            <div className={"form-field"}>
                <label>Confirmation of the password</label>
                <input type={"password"} maxLength={"100"} onChange={(e) => handleChange(e, "confirmPassword")} />
            </div>
            
            <div className={"form-button"}>
                <button type={"submit"}>Submit</button>
            </div>
        </form>
    )
}