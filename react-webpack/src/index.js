import React from "react";
import ReactDOM from "react-dom/client";

// create a new component. This component should produce some HTML

function App() {
	return (
		<div>
			<h1>HELLO aaa</h1>
			<h2>aaa</h2>
		</div>
	);
}

//render this component to the screen
// ReactDOM.render(<App />, document.querySelector("#root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
