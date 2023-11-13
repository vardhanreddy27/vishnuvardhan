"use client";
import React, { useEffect } from "react";
import SplitType from 'split-type'
import Image from 'next/image'

export default function Hero() {
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
const handleNavigation = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
	return (
		<div className=" fluid-container" >
			<div className="row s-hide">
			<a href="/" className="refresh">	<div className="col-6 pt-3 ps-5 pointer">@ Code by Vardhan</div></a>
				<div className="col-6 pt-3 pe-5 text-end">
					<div className="row flex-row-reverse">
					<div className="col-2 pointer" onClick={() => handleNavigation('contact-section')}>
              contact
            </div>
            <div className="col-2 pointer" onClick={() => handleNavigation('about-section')}>
              about
            </div>
            <div className="col-2 pointer" onClick={() => handleNavigation('work-section')}>
              work
            </div>

					</div>
				</div>
			</div>
			<div className="row myleft pt-5">
    <div className="col-md-6">
        <h2 id="title" className="mt-5 pt-5 main-text animate">Hi, Welcome!</h2>
        <h1 className="title animate" id="main">{` I'm Vardhan `}</h1>
        <div className="row">
            <div className="col-12 animate sub" id="sub">
                <p>Freelancer, Solution, Designer, Web, Developer</p>
            </div>
        </div>
    </div>

    <div className="col-md-6 myright">
        <Image src="/my.png" alt="Your Image" className="img-fluid" width={380}
      height={380} />
    </div>
</div>

		</div>
	);
}