import { useState, useEffect, useRef } from "react"

function UseEffect2() {
	const [click, setClick] = useState("start")
	const [start, setStart] = useState(false)
	const clickHandler = () => {
		if (click === "start") {
			setClick("reset")
			// setStart(true)
		} else {
			setCountDown(180)
			setClick("start")
			// setStart(false)
		}
	}
	const [countDown, setCountDown] = useState(180)
	const intervalRef = useRef(null)
	useEffect(() => {
		if (click === "reset" && !intervalRef.current) {
			intervalRef.current = setInterval(() => {
				console.log("interval")
				setCountDown((prevCountDown) => prevCountDown - 1)
			}, 1000)
		}

		return () => {
			clearInterval(intervalRef.current)
			console.log("interval1")
			intervalRef.current = null
		}
	}, [click])

	return (
		<div>
			<h1>UseEffect2</h1>
			<button onClick={clickHandler}>{click}</button>
			<h2>{countDown}</h2>
		</div>
	)
}
export default UseEffect2
