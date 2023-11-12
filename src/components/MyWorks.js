'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'

function MyWorks() {
  const [activeHeading, setActiveHeading] = useState('oz digital');
  const videoRef = useRef(null);

  const handleClick = (heading, videoSource) => {
    setActiveHeading(heading);
    videoRef.current.src = videoSource;
    videoRef.current.load(); // This reloads the video with the new source
    videoRef.current.play(); // This plays the video
  }

  return (
    <div className='mt-5' id="work-section">
      <h2 className='text-center'>My Works</h2>     
      <p className='text-center'>Crafting Digital Delights for the Modern Age - Where Innovation Meets Design!</p> 
      <div className='work s-hide row m-5'>
        <div className='col-7'>
          <video className='myvdo' autoPlay loop muted playsInline ref={videoRef}>
            <source src="/oz.mp4" />
          </video>
          <Image
            src="/laptop.png"
            className='lappyimg'
            width={600}
            height={246}
            alt="resume pic"
          />
        </div>
        <div className='col-5 pl-5 pr-5 lapptxt'>
          <div className={`col p-4 bor mymargin ${activeHeading === 'oz digital' ? 'active' : ''}`}>
            <h1 onClick={() => handleClick('oz digital', '/oz.mp4')}>oz-digital.com.au</h1>
          </div>
          <div className={`col p-4 bor ${activeHeading === 'Edu tech' ? 'active' : ''}`}>
            <h1 onClick={() => handleClick('Edu tech', '/elearn.mp4')}>edutech.com</h1>
          </div>
          <div className={`col p-4 bor ${activeHeading === 'Dargling event' ? 'active' : ''}`}>
            <h1 onClick={() => handleClick('Dargling event', '/wedding.mp4')}>dazzlingsevent.in</h1>
          </div>
        </div>
      </div>
      <div className='d-block d-md-none'>
      <div className="card mobile">
  <Image src="/oz.png" className="card-img-top" alt="..."      width={180}
      height={180}/>
  <div className="card-body">
    <h5 className="">oz digital</h5>
    <p className="card-text">Full Service Digital Marketing Agency in Sydney</p>
    <a href="https://oz-digital.com.au/" className="btn btn-outline-light1 ">oz-digital.com.au</a>
  </div>
</div>    <div className="card mobile mt-3">
  <Image src="/tech.png" className="card-img-top" alt="..."      width={180}
      height={180}/>
  <div className="card-body">
    <h5 className="">Edu Skills</h5>
    <p className="card-text">Elearning platform for students</p>
    <a href="https://vardhanreddy27.github.io/chaitu/" className="btn btn-outline-light1 ">EduSkills.in</a>
  </div>
</div>    <div className="card mobile mt-3 mb-3">
  <Image src="/events.png" className="card-img-top" alt="..."      width={180}
      height={180}/>
  <div className="card-body">
    <h5 className="">dazzling events</h5>
    <p className="card-text">Event Organizers And Party Planners For All Celebrations</p>
    <a href="https://oz-digital.com.au/" className="btn btn-outline-light1 ">dazzlingsevent.com</a>
  </div>
</div></div>
    </div>
  )
}

export default MyWorks
