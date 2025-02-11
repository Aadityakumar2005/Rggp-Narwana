import React from "react";

export default function Mvv(props) {
  return (
    <>
      <div>
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
          <p className="text-white mx-10 text-2xl font-serif font-bold">
            {props.title}
          </p>
        </div>
        <div className="font-serif mx-20">{props.children}</div>
        <img className="h-44 mx-auto" src={props.img} alt="" />
      </div>
    </>
  );
}
