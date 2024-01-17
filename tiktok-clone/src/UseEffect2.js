import { useState, useEffect, useRef } from "react"

function UseEffect2() {
	const [timer, setTimer] = useState(10)
	const intervalRef = useRef(null)
	const [start, setStart] = useState("start")
	const startHandler = () => {
		if (start === "start") {
			setStart("reset")
			intervalRef.current = setInterval(() => {
				setTimer((prev) => prev - 1)
			}, 1000)
		} else {
			clearInterval(intervalRef.current)
			intervalRef.current = null
			setTimer(10)
			setStart("start")
		}
	}
	useEffect(() => {
		if (timer === 0) {
			clearInterval(intervalRef.current)
			intervalRef.current = null
			setTimer(10)
			setStart("start")
		}
	}, [timer])
	return (
		<div>
			<h1>UseEffect2</h1>
			<button onClick={startHandler}>{start}</button>
			<p>{timer}</p>
		</div>
	)
}
export default UseEffect2
