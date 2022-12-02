import React from "react";
import LoginForm from "../form/LoginForm";

export default function Login() {

    return (
        <div className={"card-content silver"}>
            <div className={"-header"}>
                <h5 className={"title"}>Login</h5>
            </div>
            <div className={"-body"}>
                <LoginForm />
            </div>
        </div>
    )
}