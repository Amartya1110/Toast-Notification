import { ToastContext, useToast } from "./components/ToastProvider"

import "./App.css"

const App = () => {
    const {addToast} = useToast()


    const handleClick = (type) => {
        // const {addToast} = useToast()
        // If u call the use - useToast() - custom hook here, it'll throw an error that - "Hooks can only be called inside the body of a function component."
        // This is bcz -
        // Don’t call Hooks inside loops, conditions, or nested functions
        // Call them at the top level in the body of a function component.
        // Call them at the top level in the body of a custom Hook.
        // Refer: https://react.dev/warnings/invalid-hook-call-warning

        if(type === "success") {
            addToast("Success", "Activity performed successfully", type)
        }
        else if(type === "error") {
            addToast("Error", "An error has occured", type)
        }
        else if(type === "warning") {
            addToast("Warning", "Warning !!! Warning message", type)
        }
        else if(type === "info") {
            addToast("Info", "This is just to provide some info", type)
        }
        else {
            console.log("This type of toast doesn't exist in our app")
        }
    }



    return (
        <div className="app">
            <h1 className="app-heading">Toast Notification</h1>
            <div>
                <button className="btn" onClick={() => {handleClick("success")}}>Success</button>
                <button className="btn" onClick={() => {handleClick("error")}}>Error</button>
                <button className="btn" onClick={() => {handleClick("warning")}}>Warning</button>
                <button className="btn" onClick={() => {handleClick("info")}}>Info</button>
            </div>
        </div>
    )
}

export default App