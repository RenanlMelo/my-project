import React, { useState } from "react";
import { motion, AnimatePresence, delay, easeInOut } from "framer-motion";
import { Navbar } from "../navbar/Navbar";
import { Skills } from "./Skills";

export const AboutMe = ({ about, setAbout }) => {
  if (about === true) document.body.style.overflowX = "hidden";
  else document.body.style.overflowX = "visible";

  return (
    <>
      <div className="w-full h-full">
        <AnimatePresence>
          {about && (
            <motion.div
              initial={{ x: 500, opacity: 0, scale: 0.75 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -500, y: -75, scale: 0.75, opacity: 0 }}
              transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
            >
              <Navbar />
              <Skills />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
