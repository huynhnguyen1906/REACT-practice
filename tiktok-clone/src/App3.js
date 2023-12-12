import { useState } from "react"

function App3() {
	const [job, setJob] = useState("")
	const [jobs, setJobs] = useState([])

	const handleSubmit = () => {
		setJobs((prev) => [...prev, job])
		setJob("")
	}

	return (
		<div style={{ padding: 32 }}>
			<h1>App3 || To to list</h1>
			<input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
			<button onClick={handleSubmit}>Add</button>
			<ul>
				{jobs.map((job, index) => (
					<li key={index}>
						{job}
						<button style={{ margin: 20 }}>edit</button>
						<button>delete</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default App3
