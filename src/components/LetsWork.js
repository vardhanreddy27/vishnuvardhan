import { useEffect } from "react";
import { AiOutlineMail,AiOutlineMessage} from 'react-icons/ai';
import { BsWhatsapp} from 'react-icons/bs';
import { FaLinkedinIn} from 'react-icons/fa';

const LetsWork = () => {
  return (
    <div className="lets-work pt-5" id="contact-section">
      <div className="row contact">
        <div className="col-6"><h1 className="mobfont">Ready to build something epic ?</h1>
      <h1 className="d-inline talk mobfont1">Lets connect</h1>    <a href="tel:9866531011" > <button type="button" className=" ms-4 d-inline btn btn-outline-light btn-lg con">+91 986 653 1011</button></a>
</div>
      <div className="col-6 let"><a href="https://www.linkedin.com/in/vishnu-vardhan-157989179/"><FaLinkedinIn size={50} className="m-4" /></a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=2527webmaster@gmail.com">
<AiOutlineMail size={50} className="m-4" /></a>
<a href="https://api.whatsapp.com/send?phone=919866531011&text=Hii"> <BsWhatsapp size={50} className="m-4" /></a>
<a href="sms:+919866531011"> 

<AiOutlineMessage className='m-4' size={50} /></a></div>
      </div>
    </div>
  );
}

export default LetsWork;
