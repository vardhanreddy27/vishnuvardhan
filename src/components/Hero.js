"use client";
import React, { useEffect } from "react";
import SplitType from 'split-type'

function Hero() {
	useEffect(() => {
		const text = new SplitType('#title')
		const main = new SplitType('#main')
		const sub = new SplitType('#sub')
	
gsap.to('.word',{
	y:0,
	stagger:0.05,  
	delay:0,
	duration:0.5 
})	}, []);
	return (
		<div className=" fluid-container">
			<div className="row s-hide">
				<div className="col-6 pt-3 ps-5">@ Code by Vardhan</div>
				<div className="col-6 pt-3 pe-5 text-end">
					<div className="row flex-row-reverse">
						<div className="col-2">contact</div>
						<div className="col-2">about</div>
						<div className="col-2">work</div>
					</div>
				</div>
			</div>
			<div className="row p-5">
				<h2  id="title" className="mt-5 pt-5 main-text animate">Hi, Welcome! </h2>
				<h1 className="title animate" id="main">I`m Vardhan</h1><div className="row">
				<div className="col-12 animate sub" id="sub">
				<p>
              Freelancer, Solution, Designer, Web, Developer   
            </p>
				</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
