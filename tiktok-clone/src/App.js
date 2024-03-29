// import UseEffect1 from "./UseEffect1"
// import UseEffect2 from "./UseEffect2"
// import UseState1 from "./UseState1";
import UseState3 from "./UseState3";
// import UseMemo from "./UseMemo";
import { useState } from "react";

function App() {
	const [show, setShow] = useState(false);
	return (
		<div>
			<button
				onClick={() => {
					setShow(!show);
				}}
			>
				Show
			</button>
			{show && (
				<>
					<UseState3 />
				</>
			)}
		</div>
	);
}

export default App;
