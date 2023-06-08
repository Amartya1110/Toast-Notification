import React from "react"
import ReactDOM from "react-dom/client"
import App from "./src/App"
import { ToastProvider } from "./src/components/ToastProvider"


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <>
        <ToastProvider>
            <App />
        </ToastProvider>
    </>
)