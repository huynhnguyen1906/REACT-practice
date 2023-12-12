import { useState } from "react"

const courses = [
	{
		id: 1,
		name: "ReactJS",
	},
	{
		id: 2,
		name: "NodeJS",
	},
	{
		id: 3,
		name: "React Native",
	},
]

function App2() {
	const [user, setUser] = useState("")
	const [email, setEmail] = useState("")
	const [checked, setChecked] = useState(1)

	const handleSubmit = () => {
		console.log({
			user,
			email,
			id: checked,
		})
	}

	const [submit, setSubmit] = useState([1, 2])
	const handleChecked = (id) => {
		setSubmit((prev) => {
			if (prev.includes(id)) {
				return prev.filter((item) => item !== id)
			} else {
				return [...prev, id]
			}
		})
	}
	const handleChecked2 = () => {
		console.log(submit.join(", "))
	}

	return (
		<div style={{ padding: 32 }}>
			<h1>App2</h1>
			<input type="text" onChange={(e) => setUser(e.target.value)} />
			<br />
			<input type="text" onChange={(e) => setEmail(e.target.value)} />
			<br />
			{courses.map((course) => (
				<div key={course.id}>
					<input
						type="radio"
						checked={checked === course.id}
						onChange={() => setChecked(course.id)}
					/>
					{course.name}
				</div>
			))}
			<button onClick={handleSubmit}>submit</button>
			<br />
			<br />
			{courses.map((course) => (
				<div key={course.id}>
					<input
						type="checkbox"
						checked={submit.includes(course.id)}
						onChange={() => handleChecked(course.id)}
					/>
					{course.name}
				</div>
			))}
			<button onClick={handleChecked2}>submit</button>
		</div>
	)
}

export default App2
