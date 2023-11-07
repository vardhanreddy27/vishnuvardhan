import { useState, useEffect } from "react";
import gsap from "gsap";
import Hero from "./Hero";
import Vertical from "./Vertical";
import MyWorks from "./MyWorks";
import LetsWork from "./LetsWork";

const Preloader = () => {
	const [showPreloader, setShowPreloader] = useState(true);

	useEffect(() => {
		const textArray = ["హాయ్", "नमस्ते", "Hola", "Salut"];
		let currentIndex = 0;

		const textElement = document.getElementById("changing-text");

		const changeText = () => {
			gsap.to(textElement, {
				opacity: 0,
				duration: 0.2,
				onComplete: () => {
					currentIndex = (currentIndex + 1) % textArray.length;
					textElement.textContent = textArray[currentIndex];
					gsap.to(textElement, {
						opacity: 1,
						duration: 0.2,
						delay: 0.1,
						onComplete: changeText,
					});
				},
			});
		};

		changeText();

		setTimeout(() => {
			gsap.to(".preloader", {
				y: "-100%",
				duration: 0.8,
				ease: "power4.out",
				onComplete: () => {
					setShowPreloader(false); // Hide the preloader after animation
				},
			});
		}, 2500);
	}, []);

	return (
		<div>
			{showPreloader && (
				<div className="preloader">
					<h1 id="changing-text">hi</h1>
				</div>
			)}
			{!showPreloader && (
				<>
					<Hero />
					<Vertical />
<MyWorks />
<LetsWork />
				</>
			)}
		</div>
	);
};

export default Preloader;
