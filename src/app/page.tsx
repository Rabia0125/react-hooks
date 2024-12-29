"use client"
import UseState from "../app/components/usestate";
import OnChange from "../app/components/onchange";

export default function Home() {
  return (
    <div className="flex items-cener justify-center gap-4 pt-4 p-5">
      <div className="flex flex-col items-center justify-center bg-blue-100 p-4 rounded-md shadow-md">
      <h1 className="font-bold text-4xl text-blue-600 underline mb-3">
        UseState Hook :
      </h1>
      <UseState/>
      </div>
      <OnChange/>
      </div>
      );
      }