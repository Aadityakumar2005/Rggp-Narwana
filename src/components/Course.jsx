import React from "react";
import Branch from "./Branch";
let img1 = 'https://www.gpnarwana.ac.in/images/project/civil-engg20.jpg'
let img2 = 'https://www.gpnarwana.ac.in/images/project/computer-engg20.jpg'
let img3 = 'https://www.gpnarwana.ac.in/images/project/electrical-engg20.jpg'
let img4 = 'https://www.gpnarwana.ac.in/images/project/mechanical-engg20.jpg'
let img5 = 'https://www.gpnarwana.ac.in/images/project/textile-design1.jpg'
let img6 = 'https://www.gpnarwana.ac.in/images/project/textile.jpg'

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
