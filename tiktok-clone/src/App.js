import UseEffect1 from "./UseEffect1"
import UseEffect2 from "./UseEffect2"
import { useState } from "react"

function App() {
	const [show, setShow] = useState(false)
	return (
		<div>
			<button
				onClick={() => {
					setShow(!show)
				}}
			>
				Show
			</button>
			{show && (
				<>
					{/* <UseEffect1 />, */}
					<UseEffect2 />
				</>
			)}
		</div>
	)
}

export default App
