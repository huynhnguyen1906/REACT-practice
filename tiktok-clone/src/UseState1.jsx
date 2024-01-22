import { useState } from "react"

const orders = [100, 200, 300]
const gifts = [
	"cpu",
	"ram",
	"ssd",
	"hdd",
	"vga",
	"monitor",
	"keyboard",
	"mouse",
]

function UseState1() {
	const [count, setCount] = useState(() => {
		const total = orders.reduce((total, cur) => total + cur)
		return total
	})

	const handleIncrease = () => {
		setCount(count + 1)
	}
	const handleDecrease = () => {
		setCount(count - 1)
	}
	const [name, setName] = useState({
		firstName: "Nguyen",
		lastName: "Van A",
		age: 20,
		address: "Ha Noi",
	})
	const handleUpdateInfo = () => {
		setName({
			firstName: "Nguyen",
			lastName: "Van B",
			age: 21,
			address: "Japan",
		})
	}

	const [gift, setGift] = useState()

	const randomGift = () => {
		const randomIndex = Math.floor(Math.random() * gifts.length)
		setGift(gifts[randomIndex])
	}

	return (
		<div className="App">
			<h1>{count}</h1>
			<button onClick={handleIncrease}>increase</button>
			<button onClick={handleDecrease}>decrease</button>
			<div>
				<h1>
					Name: {name.firstName} {name.lastName}
				</h1>
				<h2>{name.age}</h2>
				<h2>{name.address}</h2>
				<button onClick={handleUpdateInfo}>change name</button>
			</div>
			<div>
				<h1>{gift || "chưa có phần thưởng"}</h1>
				<button onClick={randomGift}>lấy thưởng</button>
			</div>
		</div>
	)
}

export default UseState1
