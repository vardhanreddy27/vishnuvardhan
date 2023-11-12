"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TweenMax } from 'gsap';
import Image from 'next/image'
import { HiMiniPlusCircle } from 'react-icons/hi2';
import { HiPlusSm } from 'react-icons/hi';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
function Vertical() {
	const sectionRef = useRef(null);
	const triggerRef = useRef(null);
  const handleHover = (element) => {
    TweenMax.to(element, 0.5, { scale: 1.03 }); // Adjust the scale factor as needed
  };

  const handleHoverOut = (element) => {
    TweenMax.to(element, 0.5, { scale: 1 });
  };
	gsap.registerPlugin(ScrollTrigger);
  
	useEffect(() => {
	  const pin = gsap.fromTo(
		sectionRef.current,
		{
		  translateX: 0,
		},
		{
		  translateX: "-200vb",
		  ease: "none",
		  duration: 1,
		  scrollTrigger: {
			trigger: triggerRef.current,
			start: "top top",
			end: "500 top",
			scrub: 0.6,
			pin: true,
		  },
		}
	  );
	  return () => {
		{/* A return function for killing the animation on component unmount */ }
		pin.kill();
	  };
	}, []);




	return (
		<div className="pt-5" id="about-section">
 <section className="scroll-section-outer">
 <div ref={triggerRef}>
        <div ref={sectionRef}  className="scroll-section-inner">
          <div className="scroll-section">
            <div className="card element firstcard vcard shadow ms-5" 
              onMouseEnter={() => handleHover('.element')}
              onMouseLeave={() => handleHoverOut('.element')}>
  <div className="card-body cardheight ">
    <div className="card-title nob"><a href="https://www.linkedin.com/in/vishnu-vardhan-157989179/"><HiMiniPlusCircle className="plus" size = '2.5rem'/></a></div>
    <div className="card-subtitle text-muted">
    <Image
      src="/welcome.png"
      width={180}
      height={180}
      alt="Picture of the me"
    />
    </div>
    <h2 className="card-text">Hi, Good Morning</h2>
<p> I bring a passion for clean, efficient code and a proven track record of delivering high-quality projects. </p>
   </div>
</div>
          </div>
          <div className="scroll-section mysec">
		  <div className="card firstcard vcard mapimg shadow element1"        
          onMouseEnter={() => handleHover('.element1')}
          onMouseLeave={() => handleHoverOut('.element1')}>
  <div className="card-body cardheight">
  <div className="card-title nob"><a href="https://maps.app.goo.gl/BuGb7jPQTDifPyvF9"><HiPlusSm   className="plus" size = '2.1rem'/></a></div>

  </div>
</div>         </div>
          <div className="scroll-section mythird">
		<a href="https://drive.google.com/file/d/1Wz9vNG8cDUc4aXcXovLpCl7W_lxJI7tq/view?usp=sharing"></a> <div className="card element2 firstcard vcard myt  shadow"         
   onMouseEnter={() => handleHover('.element2')}
   onMouseLeave={() => handleHoverOut('.element2')}>
                <div className="card-title "><HiPlusSm className="plus int linkedin" size = '2.1rem'/></div>
  <a href="https://drive.google.com/file/d/1Wz9vNG8cDUc4aXcXovLpCl7W_lxJI7tq/view?usp=sharing"><div className="card-body cardheight centerall">    

  <h2 className="card-text fb">Resume / CV</h2>
  <Image
      src="/resume.png"
      width={180}
      height={180}
      alt="resume pic"
    />
  </div></a>
</div>        </div>
<div className="scroll-section mythird">
 <div className="card firstcard vcard shadow element3"        
           onMouseEnter={() => handleHover('.element3')}
           onMouseLeave={() => handleHoverOut('.element3')}>
        <a href="https://www.linkedin.com/in/vishnu-vardhan-157989179/"> 
  <div className="card-body cardheight centerall linkedcolor">
    
  <h2 className="card-text linkedsize">in</h2>  <div className="card-title nob"><HiPlusSm   className="plus linkedin" size = '2.1rem'/></div>

  </div></a>  
</div>      </div><div className="scroll-section myfour">
		  <div className="card firstcard vcard element4 shadow"        
          onMouseEnter={() => handleHover('.element4')}
          onMouseLeave={() => handleHoverOut('.element4')}>
                <div className="card-title "><a href="https://www.linkedin.com/in/vishnu-vardhan-157989179/"><HiPlusSm className="plus int linkedin" size = '2.1rem'/></a></div>
  <div className="card-body cardheight centerall"><Image
      src="/work.png"
      width={120}
      height={120}
      alt="resume pic"
    />
  <h2 className="card-text">Let`s work
together</h2>
<p>We are deeply passionate about our work, dedicating ourselves to continuous learning and development. We infuse our projects with the <mark>latest knowledge and innovative ideas.</mark> Each new project is a chance for us to partner closely with our clients, <mark>turning their distinct vision into reality.</mark></p>

  </div>
</div>        </div>
        </div>
      </div>
    </section>
		</div>
	);
}

export default Vertical;
