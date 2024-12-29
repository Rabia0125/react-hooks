"use client"
import { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(true);
  
    const countUp = () => {
      setCount(count + 1);
    };
    const countDown = () => {
      setCount(count - 1);
      };
  return (
    <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-blue-500">{name ? "Counting Start" : "Counting Stop"}</h1>
        <p className="font-bold text-2xl">Counter : {count}</p>
        <div className="flex justify-center gap-2">
          <button
            onClick={countUp}
            className="bg-green-500 text-white py-2 px-2 rounded-lg"
          >
            Increase
          </button>
          <button
            onClick={countDown}
            className="bg-red-500 text-white py-2 px-2 rounded-lg"
          >
            decrease
          </button>
          <button
            onClick={() => setName(!name)}
            className="bg-blue-500 text-white font-bold py-2 px-2 rounded-lg"
          >
            Click
          </button>
        </div>
      </div>
      );
      };


export default UseState
