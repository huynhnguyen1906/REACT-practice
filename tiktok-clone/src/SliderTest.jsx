import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderTest.css";

const urls = [
	"https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg",
	"https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg",
	"https://imgflip.com/s/meme/Smiling-Cat.jpg",
	"https://imgflip.com/s/meme/Cute-Cat.jpg",
	"https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg",
	"https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg",
	"https://imgflip.com/s/meme/Smiling-Cat.jpg",
	"https://imgflip.com/s/meme/Cute-Cat.jpg",
	"https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg",
	"https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg",
	"https://imgflip.com/s/meme/Smiling-Cat.jpg",
	"https://imgflip.com/s/meme/Cute-Cat.jpg",
	"https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg",
	"https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg",
	"https://imgflip.com/s/meme/Smiling-Cat.jpg",
	"https://imgflip.com/s/meme/Cute-Cat.jpg",
];

function SliderTest() {
	const sliderRef = useRef(null);
	const sliderContainerRef = useRef(null);

	const settings = {
		customPaging: function (i) {
			return (
				<img src={urls[i]} alt={`Slide ${i + 1}`} style={{ width: "100%" }} />
			);
		},
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		afterChange: (current) => {
			const dotContainer =
				sliderContainerRef.current.querySelector(".slick-dots");
			if (dotContainer) {
				const dots = dotContainer.children;
				if (dots.length > 0) {
					const activeDot = dots[current];
					activeDot.scrollIntoView({ behavior: "smooth", inline: "center" });
				}
			}
		},
	};

	return (
		<div className="slider-container" ref={sliderContainerRef}>
			<Slider ref={sliderRef} {...settings}>
				{urls.map((url, index) => (
					<img key={index} src={url} alt={`Slide ${index + 1}`} />
				))}
			</Slider>
		</div>
	);
}

export default SliderTest;
