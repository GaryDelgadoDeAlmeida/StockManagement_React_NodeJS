import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkEmail, checkPassword } from "../../functions";
import Notification from "../part/Notification";

/**
 * Connect a user to the application
 * 
 * @returns
 */
export default function LoginForm() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [notifMessage, setNotifMessage] = useState("")
    const [notifClassname, setNotifClassname] = useState("")

    const setResponse = (className, message) => {
        setNotifClassname(className)
        setNotifMessage(message)
    }

    const handleChange = (e, field) => {
        let fieldValue = e.target.value
        setResponse("", "")

        if(field === "login") {
            if(checkEmail(fieldValue)) {
                setEmail(fieldValue)
            } else {
                setResponse("warning", "The email address isn't a valid email")
            }
        } else if(field === "password") {
            if(checkPassword(fieldValue)) {
                setPassword(fieldValue)
            } else {
                setResponse("warning", "The password isn't secure")
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(email === "" || password === "") {
            setResponse("danger", "The login or password isn't valid")
            return
        }

        dispatch({
            type: "AUTHENTIFY_ACTION",
            payload: {
                login: email,
                password: password
            }
        })
        setResponse("success", "You have been successfully authenficate.")
    }

    return (
        <form className={"form"} onSubmit={(e) => handleSubmit(e)}>
            {notifMessage !== "" && (
                <Notification className={notifClassname} message={notifMessage} />
            )}

            <div className={"form-field"}>
                <label>Login</label>
                <input type={"text"} maxLength={"255"} onChange={(e) => handleChange(e, "login")} />
            </div>
            <div className={"form-field"}>
                <label>Password</label>
                <input type={"password"} maxLength={"255"} onChange={(e) => handleChange(e, "password")} />
            </div>
            <div className={"form-button"}>
                <button type={"submit"}>Submit</button>
            </div>
        </form>
    )
}