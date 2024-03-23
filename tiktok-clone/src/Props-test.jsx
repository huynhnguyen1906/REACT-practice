const foods = [
	{ name: "pizza", price: 100 },
	{ name: "burger", price: 50 },
	{ name: "coke", price: 30 },
	{ name: "fries", price: 40 },
];

function PropsTest() {
	return (
		<div>
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

export default PropsTest;
