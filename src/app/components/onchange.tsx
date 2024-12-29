import React from "react";

const OnChange = () => {
  const [input, setInput] = React.useState("");
  return (
    <div className="flex flex-col justify-center items-center border bg-sky-100 p-4 shadow-md rounded-md">
      <h1 className="font-bold text-4xl text-sky-500 mb-4 underline">On Change Handle :</h1>
      <input
        type="text"
        placeholder="Write Something here...."
        value={input}
        onChange= {(e) => setInput(e.target.value)}
        className="border text-xl rounded-md"
      />
      <p className="font-semibold text-xl text-sky-300">Input Value: {input}</p>
    </div>
  );
};

export default OnChange;
