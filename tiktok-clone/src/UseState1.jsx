// import { useState } from "react";

// api を呼ぶ
// news という配列にデータをget

const news = [
	{ title: "a", date: 2024 },
	{ title: "b", date: 2023 },
	{ title: "c", date: 2024 },
	{ title: "d", date: 2023 },
	{ title: "e", date: 2023 },
];

function UseState1() {
	news.forEach((a, index) => {
		console.log(index);
	});

	return (
		<div className="App">
			<ul>
				{news.map((news, index) => (
					<li key={index}>
						{news.title}-{news.date}
					</li>
				))}
			</ul>
		</div>
	);
}

export default UseState1;
