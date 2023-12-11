import { useState } from "react"

function App() {
	const [count, setCount] = useState(1)

	const handleIncrease = () => {
		setCount(count + 1)
	}
	const handleDecrease = () => {
		setCount(count - 1)
	}
	return (
		<div className="App">
			<h1>{count}</h1>
			<button onClick={handleIncrease}>increase</button>
			<button onClick={handleDecrease}>decrease</button>
		</div>
	)
}

export default App
