import { useEffect } from "react"

import "./Toast.css"

const Toast = ({id, message, description, type, removeToast}) => {

    useEffect(() => {
        console.log("ueEffect : ", id)
        const timerID = setTimeout(() => {
            removeToast(id)
            console.log(timerID)
        }, 5990)

        return () => {
            clearTimeout(timerID)
        }
    }, [])


    return (
        <div className={`toast toast-${type}`}>
            <h1>{message}</h1>
            <h3>{description}</h3>
        </div>
    )
}

export default Toast