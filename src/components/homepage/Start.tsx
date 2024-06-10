import React, { useRef, useState } from "react";

export const Start = ({ isTrue, setIsTrue }) => {
  const polygonRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  
  const handleClick = () => {
    setIsTrue(!isTrue)
  }

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-full aspect-square w-fit flex justify-center items-center">
          <svg
            width="150px"
            height="150px"
            viewBox="0 0 24 24"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            className="z-10 rounded-full  flex justify-center items-center"
          >
            <defs
              style={{
                fill: "#505050",
                stroke: "#505050",
                strokeWidth: "1px",
              }}
            ></defs>
            <circle
              className="arrow"
              cx="12"
              cy="12"
              r="7.5"
              fill="#121217"
              strokeWidth=".1px"
              onClick={handleClick}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            />
            <polygon
              ref={polygonRef}
              className="polygon cls-1 -z-10 pointer-events-none"
              stroke="#505050"
              strokeWidth=".1px"

              fill="#121217"
              points="9.14 15.82 9.14 8.18 15.82 12 9.14 15.82"
              style={{
                transform: isHovered ? "scale(1.15)" : "scale(1)",
                transition: "transform ease-in-out .35s",
                transformOrigin: "center",
                stroke: isHovered ? "rgb(213, 232, 255)" : "#505050",
              }}
            />
          </svg>
        </div>
        <p className="text-[#999999] text-2xl italic mt-2">Click me</p>
      </div>
    </>
  );
};
