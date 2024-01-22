const { useState, useRef, useMemo } = require("react")

function UseMemo() {
	const [name, setName] = useState("")
	const [price, setPrice] = useState("")
	const [products, setProducts] = useState([])
	const nameRef = useRef(null)

	const handleSubmit = () => {
		setProducts([...products, { name, price: +price }])
		setName("")
		setPrice("")
		nameRef.current.focus()
	}

	const totalPrice = useMemo(() => {
		return products.reduce((total, cur) => total + cur.price, 0)
	}, [products])
	return (
		<div>
			<input
				ref={nameRef}
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Enter name"
			/>
			<br />
			<input
				type="text"
				value={price}
				onChange={(e) => setPrice(e.target.value)}
				placeholder="Enter price"
			/>
			<br />
			<button onClick={handleSubmit}>Submit</button>
			<br />
			Total: {totalPrice}
			<ul>
				{products.map((product, index) => (
					<li key={index}>
						{product.name} - {product.price}
					</li>
				))}
			</ul>
		</div>
	)
}
export default UseMemo
