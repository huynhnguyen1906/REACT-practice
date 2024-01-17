import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import UseState1 from "./UseState1"
import UseState2 from "./UseState2"
import UseState3 from "./UseState3"
import UseEffect1 from "./UseEffect1"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		{/* <UseState1 /> */}
		{/* <UseState2 /> */}
		{/* <UseState3 /> */}
		<App />
	</React.StrictMode>
)

reportWebVitals()
