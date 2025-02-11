import React from 'react'
import logo from '../assets/narwana logo.jpg'
import img1 from '../assets/beti.jpg'
import img2 from '../assets/water2.jpg'
import img3 from '../assets/tree1.jpg'

export default function Footer() {
  return (
    <>
    <div className="bg-gradient-to-r from-gray-100 to-rose-200">
      <div className='flex px-40 justify-between'>
        <div className='pt-2'>
            <img src={logo} alt="" />
            <p className="text-black font-serif font-semibold text-1xl">
                Rajiv Gandhi Govt. Polytechnic, Narwana(Jind) <br/>
                School Timing
            </p>
            <p className="text-black font-serif font-semibold text-xs">
                &#x1F552; Mon-Fri: 9.00AM-5.00PM <br/>
                &#x1F552; Every Saturday: <button className="inline-block rounded text-white bg-gradient-to-r from-orange-400 to-green-500 hover:from-pink-500 hover:to-orange-500">Holiday</button> <br/>
                &#x1F552; Every Sunday: <button className="inline-block rounded text-white bg-gradient-to-r from-orange-400 to-green-500 hover:from-pink-500 hover:to-orange-500">Holiday</button> <br/>
            </p>
        </div>
        <div>
            <p className="text-black font-serif font-semibold text-1xl">
            Slogan
            </p>
            <div className='flex my-2'>
                <img src={img1} alt="" />
                <p className='pl-1 font-serif font-semibold '>Beti Bachao Beti Padhao</p>
            </div>
            <div className='flex my-2'>
                <img src={img2} alt="" />
                <p className='pl-1 font-serif font-semibold '>Beti Bachao Beti Padhao</p>
            </div>
            <div className='flex my-2'>
                <img src={img3} alt="" />
                <p className='pl-1 font-serif font-semibold '>Beti Bachao Beti Padhao</p>
            </div>
        </div>
      </div>
      <div className="flex mt-5 px-40 justify-between">
            <div>
                <p className='font-serif font-semibold'>&#128241;<br/>
                    Call Us <br/>
                    Phone: 01684-242159,+91-94165-73405 <br/>
                    +91-70150-49521,+91-97280-32058
                </p>
            </div>
            <div className='font-serif font-semibold'>
                <p>&#61982; <br/>
                    Location<br/>
                    Patiala Road, NH-71, <br/>
                    Narwana-126116
                </p>
            </div>
            <div >
                <p className='font-serif font-semibold'>&#128231; <br/>
                    Email <br/>
                    <a href="https://www.bing.com/search?EID=MBSC&form=BGGCMF&pc=U239&DPC=BG02&q=gpnarwana.ac.in" id="hyperlink">www.gpnarwana.ac.in</a><br/>
                    <a href="/">gpnarwana1@gmail.com</a>
                </p>
            </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-orange-600 ...">
          <p className="text-center text-white font-semibold font-serif text-xs">Copyright &#169;2024 Aaditya Kumar. All Rights Reserved</p>
        </div>
    </>
  )
}
