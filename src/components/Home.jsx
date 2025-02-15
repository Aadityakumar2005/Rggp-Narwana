let mission = "https://www.gpnarwana.ac.in/images/mission50.png";
let vision = "https://www.gpnarwana.ac.in/images/Vision50.jpg";
let values = "https://www.gpnarwana.ac.in/images/about/values.png";
import Mvv from "./Mvv";
import Card from "./Card";
let anil = "https://www.gpnarwana.ac.in/Team/Anil%20Monga.jpg";
let radheshyam = "https://www.gpnarwana.ac.in/Team/Mr.%20Radheshyam%20Bishnoi1.png";
let sandeep = "https://www.gpnarwana.ac.in/Team/Sandeep%20Kumar.jpeg";
import rahul from "../assets/rahul.jpg";
let priyanka = "https://www.gpnarwana.ac.in/Team/Priyanka%20Choudhary3.jpg";
let img1 = "https://www.gpnarwana.ac.in/images/gallery/g1.jpg";
let img2 = "https://www.gpnarwana.ac.in/images/gallery/g18.jpg";
let img3 = "https://www.gpnarwana.ac.in/images/gallery/g23.jpg";
let img4 = "https://www.gpnarwana.ac.in/images/gallery/g27.jpg";
let img5 = "https://www.gpnarwana.ac.in/images/gallery/g36.jpg";
let img6 = "https://www.gpnarwana.ac.in/images/gallery/g35.jpg";
import Principal from "./Principal";

export default function Home() {
  return (
    <>
      <div className="bg-slate-100">
        <Principal/>
        <Mvv title="Our Mission" img={mission}>
          <p>1. To excel student centred learning environment.</p>
          <p>2. To develop professional skills through Industry academic interface.</p>
          <p>3. To enhance the teaching learning process through digital technologies.</p>
          <p>4. To inculcate ethical values, entrepreneurial skills and teamwork spirit.</p>
        </Mvv>
        <Mvv title="Our Vision" img={vision}>
          <p>
            To transform younger minds into valuable resources with technical, professional and entrepreneurial skills for sustainable growth of society and Nation as a whole.
          </p>
        </Mvv>
        <Mvv title="Our Values" img={values}>
          <p>
            One of the most crucial elements in out lives is self-confidence. Without it, we may find it difficult to achieve anything. It's vital not to lose our self-confidence when facing challenges or tough times; everyone goes through them. Managing our time wisely is also important. Maintainig a good character is essential, regardless of our action. Moving forward with this mindset is key. We should believe that nothing is impossible; this belief empowers us to tackle challenging tasks effortlessly. Life is a precious gift, and we should cheris it. Going forward with a good character and a positive attitude is essential. Even in challenging times, staying positive is crucial. Remember a positive attitude is the most potent tool for achieving success in life.
          </p>
        </Mvv>
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
          <p className="text-white mx-10 upper text-2xl font-serif font-bold">
            Our Official Incharges
          </p>
        </div>
        <div className="flex justify-center">
          <div>
            <div className="mt-5 flex">
              <Card name="Mr. Radheshyam Bishnoi" branch="Civil Engg." img={radheshyam}/>
              <Card name="Mrs. Priyanka Choudhary" branch="Computer Engg." img={priyanka}/>
              <Card name="Mr. Rahul Singla" branch="Electrical Engg." img={rahul}/>
            </div>
            <div className="mt-3 flex">
              <Card name="Mr. Anil Monga" branch="Mechanical Engg." img={anil}/>
              <Card name="Mr. Sandeep Kumar" branch="Textile Design" img={sandeep}/>
              <Card name="Mr. Sandeep Kumar" branch="Textile Technology" img={sandeep}/>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
          <p className="text-white mx-10 text-2xl font-serif font-bold">Gallery</p>
        </div>
        <div className="flex justify-center">
          <div>
            <div className="mt-2 flex">
              <img className="rounded-3xl m-2 w-96" src={img1} alt="" />
              <img className="rounded-3xl m-2 w-96" src={img2} alt="" />
              <img className="rounded-3xl m-2 w-96" src={img3} alt="" />
            </div>
            <div className="mt-2 flex">
              <img className="rounded-3xl m-2 w-96" src={img4} alt="" />
              <img className="rounded-3xl m-2 w-96" src={img5} alt="" />
              <img className="rounded-3xl m-2 w-96" src={img6} alt="" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 ...">
          <p className="text-center text-white font-semibold font-serif text-1xl">"Dedication to education is Our Strength"</p>
        </div>
      </div>
    </>
  );
}
