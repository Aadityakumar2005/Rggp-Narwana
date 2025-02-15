import React from "react";
let clg = "https://www.gpnarwana.ac.in/images/about/aboutus.jpg";
import Tables from "./Tables";

export default function About() {
  return (
    <>
      <div className="mx-48 my-2 p-3 bg-rose-100 border-orange-500 border-solid rounded border-4">
        <h3 className="text-red-500 font-serif">ABOUT US</h3>
        <p className="font-serif text-justify">
          Rajiv Gandhi Govt. Polytechnic, Narwana was established in 2007 with
          the aim to enhance employbility of the youth by equipping them with
          latest technical skills for suitable at the main National Highway
          NH-71 at Patiala Road with Acquiring area of 10.11 acres near ITI
          campus. <br />
          The Campus is laid out with Ambient lush green infrastructure,
          teaching block, Sports ground and fully Wi-Fi Campus. <br />
          The Institute has spacious and well ventialated class rooms, labs
          equipped with latest and modern machinery to impact practical
          knowledge to the students and well stocked library and E-library.
        </p>
        <img className=" h-60 mx-auto" src={clg} alt="PrincipalImage" />
        <p className="font-serif text-justify">
          The Institute started as a center of excellence in Textiles, running
          with Textile Technology branch with intake of 60 seats(guest class has
          started at Govt. Polytechnic, Hisar) from the session 2007-08. The
          classes are running in its own Campus from academic session 2009-10
          with three Textile branches with an intake of 60 seats at mentioned
          below:-
        </p>
        <Tables/>
      </div>
    </>
  );
}
