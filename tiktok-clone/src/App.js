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
<<<<<<< HEAD
					{/* <UseEffect1 />, */}
=======
					{/* <UseEffect1 /> */}
>>>>>>> 0c43025454a3ebb374c9d9902ea9c0fbb4a871b0
					<UseEffect2 />
				</>
			)}
		</div>
	)
}

export default App
