import React from "react";
import "../css/components.css";

export const Navbar = () => {
  return (
    <>
      <header className="w-full left-0 top-0 mb-8 px-32 flex justify-center items-center fixed">
        <ul className="text-primary flex gap-x-12 py-6 text-xl font-extralight w-fit px-14 justify-center items-center shadow-[0_10px_30px_0px_rgba(1,1,1,.6)] rounded-b-xl">
          <li className="hover-underline relative">About me</li>
          <li className="hover-underline relative">Projects</li>
          <li className="hover-underline relative">Social Media</li>
        </ul>
      </header>
    </>
  );
};
