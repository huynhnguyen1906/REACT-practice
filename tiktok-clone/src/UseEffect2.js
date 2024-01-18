import { useState, useEffect, useRef } from "react"

function UseEffect2() {
<<<<<<< HEAD
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
=======
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
>>>>>>> 0c43025454a3ebb374c9d9902ea9c0fbb4a871b0
		</div>
	)
}
export default UseEffect2
