"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Preloader from "@/components/Preloader";


function Index() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const lenis = new Lenis()
		function raf(time) {
		  lenis.raf(time)
		  requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
		
	}, []);

	return (
		<>			<Preloader />

		</>
	);
}

export default Index;
