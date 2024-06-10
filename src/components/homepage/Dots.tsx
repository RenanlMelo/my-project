import React, { useEffect, useRef } from "react";
import "./Dots.css";

const Dots = () => {
  const animationCounter = useRef(0);

  useEffect(() => {
    const createDots = () => {
      const ball = document.createElement("span");
      ball.classList.add("ball");

      const size = Math.floor(Math.random() * 5) + 5;

      let initialX = Math.random() * (innerWidth);
      let initialY = Math.random() * (innerHeight);
      console.log("initialX: ", initialX);
      console.log("initialY: ", initialY);
      
      // Verificar se o ponto está dentro da tela
      if (
        initialX < 0 ||
        initialX > window.innerWidth ||
        initialY < 0 ||
        initialY > window.innerHeight
      ) {
        return; // Ignorar a criação se estiver fora da tela
      }

      ball.style.left = `${initialX}px`;
      ball.style.top = `${initialY}px`;
      ball.style.width = `${size}px`;
      ball.style.height = `${size}px`;
      ball.style.position = "absolute";
      ball.style.opacity = ".5";
      ball.style.backgroundColor = "white"; // Adicionando uma cor para visualização

      let moveX = Math.random() * 2 - 1;
      let moveY = Math.random() * 2 - 1;

      // Limit movement to avoid going outside the screen
      moveX *= 0.5; // Adjust this value to control movement range
      moveY *= 0.5;

      const animationName = `move${animationCounter.current++}`;
      const animationDuration = Math.random() * 21 + 13;
      const animationDelay = 0;

      const keyframes = `
        0% {
          transform: translate(${initialX}px, ${initialY}px);
        }
        100% {
          transform: translate(
            ${initialX + moveX * window.document.body.clientWidth}px, 
            ${initialY + moveY * window.document.body.clientHeight}px);
        }
      `;

      const style = document.createElement("style");
      style.textContent = `@keyframes ${animationName} { ${keyframes} }`;

      document.head.appendChild(style);

      // ball.style.animationName = animationName;
      // ball.style.animationDuration = `${animationDuration}s`;
    //   ball.style.animationDelay = `${animationDelay}s`;
    //   ball.style.animationFillMode = "forwards";

      ball.addEventListener("animationend", () => {
        const corpoElement = document.getElementById("corpo");
        if (corpoElement) {
          corpoElement.removeChild(ball);
          createDots();
        }
      });

      const corpoElement = document.getElementById("corpo");
      if (corpoElement) {
        corpoElement.appendChild(ball);
      }
    };

    let i = 0;
    while (i <= 60) {
      createDots();
      i++;
    }
    console.log("Número total de bolas criadas:", animationCounter.current);
  }, []);

  return (
    <>
      <div
        id="corpo"
        className="w-screen h-screen absolute top-0 left-0  "
      ></div>
    </>
  );
};

export default Dots;
