import React from "react"
import { memo } from "react"

function MemoReact({ buttonText, onButtonClick }) {
	console.log("re-render")
	return (
		<>
			<h1>hello</h1>
			<button onClick={onButtonClick}>{buttonText}</button>
		</>
	)
}
export default memo(MemoReact)
