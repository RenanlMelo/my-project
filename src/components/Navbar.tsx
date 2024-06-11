import React from "react";

export const Navbar = () => {
  return (
    <>
      <header className="w-full left-0 top-0 py-8 px-32">
        <ul className="text-primary flex gap-x-12 pb-6 text-xl font-extralight w-full justify-center items-center border-b border-border ">
          <li className="hover:border-b border-b-[#f8f8f8] duration-200 origin-center">About me</li>
          <li>Projects</li>
          <li>Social Media</li>
        </ul>
      </header>
    </>
  );
};
