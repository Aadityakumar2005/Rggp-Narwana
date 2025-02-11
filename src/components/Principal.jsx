import React from 'react'
import principal from "../assets/image.png";

export default function Principal() {
  return (
    <div className="mx-48 my-2 p-3 bg-rose-100 border-orange-500 border-solid rounded border-4">
          <h3 className="text-red-500 font-serif">PRINCIPAL MESSAGE</h3>
          <p className="font-serif text-justify">
            It's an immense pleasure to welcome you all to Rajiv Gandhi Govt.
            Polytechnic, Narwana. We aim to provide quality technical
            educationwith great emphasis on human values, technical,
            professional, entrepreneurial skills for sustainable growth of
            society and nation as a whole. We believe that the purpose of
            education is to facillitate the development of clarity of
            aspirations and adequate competence to actualize it. Since its
            establishment in 2009, the institute has made its presence strongly
            felt in the technical education community not only in the region but
            at state level too. A range of achievement in academics in all six
            branches is attained by joint efforts of all stake holders. Our very
            young alumni continue to keep the institute name high.
          </p>
          <img className=" h-60 mx-auto" src={principal} alt="PrincipalImage" />
          <p className="font-serif text-justify">
            This institute is well equipped with laboratory, workshop, rich
            collectionof book/resources in library, computing facility, internet
            facilityand industry-institute interaction facilities which enriches
            the process of learning. Our teaching learning process is based on
            practical, inclusive and motivational approach. In addition to
            excellent teaching, the faculty members are actively involved in
            over all training and placement activities of the students and
            monitoring them about their carrier path and overall development.
            Our faculty is also actively attending & participating
            seminar/workshops/training & conferencing conducted by NITTTR/AICTE
            and other eminent Institute time to time enrich their knowledge and
            to update with latest technology. With the guidance of seniors,
            supports from colleagues and decoration of diligent workforce, I
            wish and hope this premier institute to scale higher heights.
          </p>
          <h3 className="text-red-500 font-serif font-semibold">Thank you</h3>
          <h3 className="text-red-500 font-serif font-semibold">
            With warm regard
          </h3>
          <h3 className="text-red-500 font-serif font-semibold">
            Mr. Jaswant Singh
          </h3>
          <h3 className="text-red-500 font-serif font-semibold">Principal</h3>
        </div>
  )
}
