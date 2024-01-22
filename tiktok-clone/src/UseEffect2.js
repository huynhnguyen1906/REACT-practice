import { useState, useEffect, useRef } from "react"
import MemoReact from "./MemoReact"

function UseEffect2() {
	const [buttonState, setButtonState] = useState("start")
	const [countDown, setCountDown] = useState(180)
	const intervalRef = useRef(null)

	const handleButtonClick = () => {
		if (buttonState === "start") {
			setButtonState("reset")
			intervalRef.current = setInterval(() => {
				setCountDown((prevCountDown) => prevCountDown - 1)
			}, 1000)
		} else {
			clearInterval(intervalRef.current)
			intervalRef.current = null
			setCountDown(180)
			setButtonState("start")
		}
	}

	useEffect(() => {
		if (countDown === 0) {
			clearInterval(intervalRef.current)
			intervalRef.current = null
			setCountDown(180)
			setButtonState("start")
		}
	}, [countDown])

	return (
		<div>
			<MemoReact />
			<h1>UseEffect2</h1>
			<button onClick={handleButtonClick}>{buttonState}</button>
			<h2>{countDown}</h2>
		</div>
	)
}

export default UseEffect2
