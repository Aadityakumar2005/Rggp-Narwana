import React from "react";
import Branch from "./Branch";
import img1 from '../assets/civil-engg20.jpg'
import img2 from '../assets/computer-engg20.jpg'
import img3 from '../assets/electrical-engg20.jpg'
import img4 from '../assets/mechanical-engg20.jpg'
import img5 from '../assets/textile-design1.jpg'
import img6 from '../assets/textile.jpg'

export default function Course() {
  return (
    <div className="mx-48 my-2 p-3 bg-rose-100 border-orange-500 border-solid rounded border-4">
      <div className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
        <p className="text-white text-2xl font-serif font-bold text-center">
          Our Courses
        </p>
      </div>
      <Branch name="Civil Engineering" img={img1} />
      <Branch name="Computer Engineering" img={img2} />
      <Branch name="Electrical Engineering" img={img3} />
      <Branch name="Mechanical Engineering" img={img4} />
      <Branch name="Textile Design" img={img5} />
      <Branch name="Textile Technology" img={img6} />
    </div>
  );
}
