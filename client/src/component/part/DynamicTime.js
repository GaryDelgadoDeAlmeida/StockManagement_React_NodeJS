import React, { useEffect, useState } from "react";

export default function DynamicTime() {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
    })

    return (
        <div className={"card-content current-time"}>
            <div className={"-body"}>
                <div className={"time"}>{currentTime.toLocaleTimeString("en-US")}</div>
                <div className={"date"}>{currentTime.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</div>
            </div>
        </div>
    )
}