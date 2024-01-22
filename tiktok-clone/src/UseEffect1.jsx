import { useEffect, useState } from "react"

const tabs = ["posts", "comments", "albums", "photos", "todos", "users"]

const UseEffect1 = () => {
	//1. useEffect(callback)
	//- callback: run after component render

	//2. useEffect(callback, [])
	//- callback: only run 1 time after component render
	//3. useEffect(callback, [dependency])

	//-------------------
	// Callback always run when component render
	// cleanup function run before component render

	const [title, setTitle] = useState("")
	useEffect(() => {
		document.title = title
	})

	const [posts, setPosts] = useState([])
	const [type, setType] = useState("posts")
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then((res) => res.json())
			.then((posts) => {
				setPosts(posts)
			})
	}, [type])

	const [showGoTop, setShowGoTop] = useState(false)
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 200) {
				setShowGoTop(true)
			} else {
				setShowGoTop(false)
			}
		}
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const [size, setSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	})

	const handleResize = () => {
		setSize({
			width: window.innerWidth,
			height: window.innerHeight,
		})
	}
	useEffect(() => {
		window.addEventListener("resize", handleResize)
		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])
	return (
		<div>
			<h1>UseEffect1</h1>
			<h2>Width: {size.width}</h2>
			<h2>height: {size.height}</h2>
			{tabs.map((tab, index) => (
				<button
					key={index}
					onClick={() => setType(tab)}
					style={
						type === tab
							? {
									color: "#fff",
									backgroundColor: "#333",
							  }
							: {}
					}
				>
					{tab}
				</button>
			))}
			<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title || post.name}</li>
				))}
			</ul>
			{showGoTop && (
				<button
					onClick={() => {
						window.scrollTo({
							top: 0,
							behavior: "smooth",
						})
					}}
					style={{ position: "fixed", bottom: 20, right: 20 }}
				>
					Go top
				</button>
			)}
		</div>
	)
}

export default UseEffect1
