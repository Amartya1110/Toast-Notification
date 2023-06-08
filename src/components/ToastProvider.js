import { createContext, useContext, useState } from "react"
import ToastContainer from "./ToastContainer"


const ToastContext = createContext()

const ToastProvider = ({children}) => {
    const [toastList, setToastList] = useState([])

    const addToast = (message, description, type) => {
        setToastList(prevToastList => [...prevToastList, {
            id: Date.now(),
            message,
            description,
            type
        }])
    }

    const removeToast = (id) => {
        setToastList(prevToastList => {
            return prevToastList.filter(toast => {
                return (toast?.id !== id)
            })
        })
    }


    return (
        <ToastContext.Provider value={{addToast}}>
            {children}
            <ToastContainer toastList={toastList} removeToast={removeToast}  />
        </ToastContext.Provider>
    )
}

// useToast is a Custom Hook

const useToast = () => {
    const context = useContext(ToastContext)

    if(context === undefined) {
        throw new Error("useToast must be used within a ToastProvider")
    }

    return context
}

export {ToastProvider, useToast}