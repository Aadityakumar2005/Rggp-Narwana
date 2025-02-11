import React from "react";
import fb from "../assets/facebook.svg";
import yt from "../assets/youtube.svg";
import tw from "../assets/square-twitter.svg";
import middle from "../assets/middle.png";

function Header(props) {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-30">
        <div className='flex justify-center'>
            <img className='h-8 w-8 m-1.5' src={fb} alt="Fb logo" />
            <img className='h-8 w-8 m-1.5' src={yt} alt="Yt logo" />
            <img className='h-8 w-8 m-1.5' src={tw} alt="Tw logo" />
        </div>
        <div className="flex justify-center">
            <p className='text-white font-bold font-serif mx-2.5'>Grievance Redressal</p>
            <p className='text-white font-bold font-serif mx-2.5'>AICTE Feedback</p>
        </div>
        <p className='text-blue-700 font-bold font-serif mx-2.5 text-center'>CALL US TODAY!: {props.number}</p>
        <div className="flex justify-center">
            <a href="Contact.jsx" className='text-white font-bold font-serif mx-2.5'>Contact Us</a>
            <p className='text-white font-bold font-serif mx-2.5'>Login</p>
        </div>
      </div >
      <div className="flex pt-1 mx-auto h-36 justify-evenly">
        <img className="mix-blend-color-burn" src={props.logo} alt="Logo" />
        <img className="mix-blend-color-burn" src={middle} alt="Logo" />
        <img className="mix-blend-color-burn" src={props.img1} alt="Logo" />
      </div>
    </>
  );
}

export default Header;
