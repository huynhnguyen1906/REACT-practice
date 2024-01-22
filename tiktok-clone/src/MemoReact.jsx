import React from "react"
import { memo } from "react"

function MemoReact() {
	console.log("memo")
	return (
		<div>
			<h1>hello</h1>
		</div>
	)
}
export default memo(MemoReact)
