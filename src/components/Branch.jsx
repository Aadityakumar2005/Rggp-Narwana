import React from 'react'

export default function Branch(props) {
  return (
    <div>
       <div className="max-w-fit overflow-hidden shadow-xl mx-auto my-2">
        <div className="p-3">
          <img
            className="rounded-3xl h-96 mx-auto"
            src={props.img}
            alt=""
          />
          <div className="py-1">
            <h3 className="text-red-500 text-center font-serif font-semibold text-2xl">
              {props.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
