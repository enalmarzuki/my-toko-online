import React from "react";

export default function Gradient() {
  return (
    <div className="bg-gray-200 antialiased min-h-screen items-center justify-center flex">
      <div className="w-full lg:w-3/4">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <div className="text-8xl bg-gradient-to-l from-blue-500 via-red-500 to-teal-500 inline text-transparent bg-clip-text font-black">
            Marzuki
          </div>
        </div>
      </div>
    </div>
  );
}
