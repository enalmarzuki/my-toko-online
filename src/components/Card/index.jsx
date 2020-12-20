import React, { useEffect } from "react";

export default function Card() {
  const selectTheme = (value) => {
    localStorage.setItem("theme", value);

    const html = document.querySelector("html");
    html.classList.add(localStorage.getItem("theme"));

    if (value === "dark") {
      html.classList.remove("light");
    } else {
      html.classList.remove("dark");
    }
  };

  useEffect(() => {
    localStorage.removeItem("theme");

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, []);

  return (
    <div className="antialiased flex items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-700">
      <div className="w-5/12">
        <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg mb-6 flex items-center justify-between">
          <div className="font-semibold text-lg text-gray-800 dark:text-white">
            Switcher
          </div>
          <div>
            <button
              onClick={() => selectTheme("light")}
              className="focus:outline-none w-4 h-4 bg-gray-200 rounded-full mr-2"
            ></button>
            <button
              onClick={() => selectTheme("dark")}
              className="focus:outline-none w-4 h-4 bg-black rounded-full"
            ></button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="px-10 py-8">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <div className="leading-relaxed  text-gray-500  dark:text-gray-300 text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              repellat numquam aliquid ex quis distinctio ab illum nostrum!
              Similique quos exercitationem repudiandae dolorem itaque? Amet
              aliquam quasi quibusdam reprehenderit quod.
            </div>
          </div>
          <div className="px-10 py-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-900 dark:text-gray-200">
            Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
    </div>
  );
}
