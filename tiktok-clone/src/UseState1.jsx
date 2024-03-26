import { useState } from "react";

const foods = [
	{ name: "pizza", price: 100 },
	{ name: "burger", price: 50 },
	{ name: "coke", price: 30 },
	{ name: "fries", price: 40 },
];

function UseState1() {
	foods.forEach((food, index) => {
		console.log(food);
	});
	const [count, setCount] = useState(0);
	const handleIncrease = () => {
		setCount(count + 1);
	};
	const handleDecrease = () => {
		setCount(count - 1);
	};
	const [name, setName] = useState("aaa");
	const handleChangeName = () => {
		setName("fin");
	};
	const [show, setShow] = useState(false);

	return (
		<div className="App">
			<h1>{count}</h1>
			<button onClick={handleDecrease}>down</button>
			<button onClick={handleIncrease}>up</button>
			<h1>{name}</h1>
			<button onClick={handleChangeName}>change name</button>
			<br />
			<button
				onClick={() => {
					setShow(!show);
				}}
			>
				show
			</button>
			{show && <h1>hello</h1>}
			<ul>
				{foods.map((food, index) => (
					<li key={index}>
						{food.name}-{food.price}
					</li>
				))}
			</ul>
		</div>
	);
}

export default UseState1;
