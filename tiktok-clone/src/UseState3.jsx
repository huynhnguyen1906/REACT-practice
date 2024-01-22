import { useState, useRef } from "react"

function UseState3() {
	const [job, setJob] = useState("")
	const jobRef = useRef(null)
	const [jobs, setJobs] = useState(() => {
		const storageJobs = JSON.parse(localStorage.getItem("jobs"))

		return storageJobs || []
	})

	const handleSubmit = () => {
		setJobs((prev) => {
			const newJobs = [...prev, job]
			const jsonJobs = JSON.stringify(newJobs)
			localStorage.setItem("jobs", jsonJobs)
			return newJobs
		})
		setJob("")
		jobRef.current.focus()
	}

	const handleDelete = (index) => {
		setJobs((prev) => {
			const newJobs = [...prev]
			newJobs.splice(index, 1)
			const jsonJobs = JSON.stringify(newJobs)
			localStorage.setItem("jobs", jsonJobs)
			return newJobs
		})
	}

	return (
		<div style={{ padding: 32 }}>
			<h1>App3 || To to list</h1>
			<input
				type="text"
				ref={jobRef}
				value={job}
				onChange={(e) => setJob(e.target.value)}
			/>
			<button onClick={handleSubmit}>Add</button>
			<ul>
				{jobs.map((job, index) => (
					<li key={index}>
						{job}
						<button
							style={{ margin: 20 }}
							onClick={() => {
								handleDelete(index)
							}}
						>
							delete
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default UseState3
