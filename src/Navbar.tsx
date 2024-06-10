import React from "react";

export const Navbar = () => {
  return (
    <>
      <header className="w-full left-0 top-0 pt-8 px-32 mb-20 fixed">
        <ul className="text-primary flex gap-x-12 pb-6 text-2xl font-semibold w-full justify-end items-center border-b border-border">
          <li>About me</li>
          <li>Projects</li>
          <li>Social Media</li>
        </ul>
      </header>
    </>
  );
};
