import { useState, useEffect, useRef, useCallback } from "react"
import MemoReact from "./MemoReact"

function UseEffect2() {
	const [buttonState, setButtonState] = useState("start")
	const [countDown, setCountDown] = useState(180)
	const intervalRef = useRef(null)

	const handleButtonClick = useCallback(() => {
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
	}, [buttonState])

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
			<h1>UseEffect2</h1>
			<MemoReact buttonText={buttonState} onButtonClick={handleButtonClick} />
			<h2>{countDown}</h2>
		</div>
	)
}

export default UseEffect2
