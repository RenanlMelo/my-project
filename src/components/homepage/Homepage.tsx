import React, { useState } from "react";
import { Start } from "./Start";
import { motion, AnimatePresence } from "framer-motion";
import "../css/components.css";

export const Homepage = ({ about, setAbout }) => {
  const [isTrue, setIsTrue] = useState(true);

  if (isTrue === true) setAbout(false);
  else setAbout(true);

  return (
    <>
      <AnimatePresence>
        {isTrue && (
          <motion.div
            initial={{ x: 200, y: -75, scale: 0.75, opacity: 0 }}
            animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            exit={{ x: -500, y: -75, scale: 0.75, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-screen flex justify-center items-center absolute"
          >
            <motion.div className="caixa relative flex flex-col bg-[#121217] justify-center items-center rounded-xl p-12">
              <motion.div className="flex mb-12">
                <motion.h1 className="font-bold text-primary text-5xl">
                  I'm a web developer
                </motion.h1>
              </motion.div>
              <Start isTrue={isTrue} setIsTrue={setIsTrue} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
