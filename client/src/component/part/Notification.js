import React from "react";

export default function Notification({className, message}) {

    const icon = (className) => {
        let iconPath = ""

        switch(className) {
            case "success":
                iconPath = "/content/svg/green/checkmark.svg"
                break

            case "danger":
                iconPath = "/content/svg/red/closemark.svg"
                break

            case "warning":
                iconPath = "/content/svg/yellow/questionmark.svg"
                break

            case "information":
                iconPath = "/content/svg/gray/informationmark.svg"
                break
            
            default:
                break
        }

        return iconPath
    }

    return (
        <>
            <div className={`notification ${className}`}>
                <div className={"icon"}>
                    <img src={`${icon(className)}`} alt={"icon"} />
                </div>
                
                <div className={"message"}>
                    <span>{message}</span>
                </div>
            </div>
            <div>&nbsp;</div>
        </>
    )
}