import { useEffect, useState } from "react"

const UseEffect1 = () => {
	//1. useEffect(callback)
	//- callback: run after component render

	//2. useEffect(callback, [])
	//- callback: only run 1 time after component render
	//3. useEffect(callback, [dependency])

	//-------------------
	// Callback always run when component render

	const [title, setTitle] = useState("")
	const [posts, setPosts] = useState([])

	useEffect(() => {
		document.title = title
	})
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((posts) => {
				setPosts(posts)
			})
	}, [])

	return (
		<div>
			<h1>UseEffect1</h1>
			<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	)
}

export default UseEffect1
