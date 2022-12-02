import React from "react";

export default function UpdateProfileForm() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className={"form"} onSubmit={(e) => handleSubmit(e)}>
            <div className={"form-field"}></div>
            <div className={"form-button"}>
                <button type={"submit"}>Submit</button>
            </div>
        </form>
    )
}