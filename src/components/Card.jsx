import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="max-w-72 overflow-hidden shadow-lg mx-2 ">
        <div className="p-5">
          <img
            className="rounded-3xl h-56"
            src={props.img}
            alt="Anil Monga"
          />
          <div className="px-1 py-4">
            <h3 className="text-red-500 font-serif font-semibold">
              {props.name}
            </h3>
            <h3 className="text-red-500 font-serif font-semibold">
              {props.branch}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
