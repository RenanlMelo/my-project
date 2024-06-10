import React, { useState } from "react";
import { motion, AnimatePresence, delay, easeInOut } from "framer-motion";
import { Navbar } from "../../Navbar";
import { AboutMeText } from "./AboutMeText";

export const AboutMe = ({ about, setAbout }) => {
  if (about === true) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "visible";

  return (
    <>
      <div className="w-full h-full">
        <AnimatePresence>
          {about && (
            <motion.div
              initial={{ x: 500, opacity: 0, scale:0.75 }}
              animate={{ x: 0, opacity: 1, scale: 1}}
              exit={{ x:-500, y:-75, scale: 0.75, opacity: 0 }}
              transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.3 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: easeInOut,
                  delay: 0.5,
                }}
                className="w-96 h-96 rounded-full bg-[#f24f1e9a] blur-[150px] absolute -top-32 right-[600px]"
              ></motion.div>
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.3 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: easeInOut,
                  delay: 1,
                }}
                className="w-96 h-96 rounded-full bg-[#0acf839a] blur-[150px] absolute top-30 right-0"
              ></motion.div>
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.3 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: easeInOut,
                }}
                className="w-96 h-96 rounded-full bg-[#3ebbff9a] blur-[150px] absolute bottom-0 left-0"
              ></motion.div>
              <Navbar />
              <AboutMeText />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
