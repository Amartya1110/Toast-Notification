import { createPortal } from "react-dom"
import Toast from "./Toast"

const ToastContainer = ({toastList, removeToast}) => {
    const toastRoot = document.getElementById("toast-root")
    return createPortal(
        <div>
            {
                toastList.map( toast => {
                    return <Toast key={toast.id} {...toast} removeToast={removeToast} />
                })
            }
        </div>,
        toastRoot
    )
}

export default ToastContainer