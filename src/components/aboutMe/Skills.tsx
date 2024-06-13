import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Skills = () => {
  return (
    <>
      <div className="mt-32 w-full flex flex-col items-center">
        <motion.h1 className="text-3xl text-[#7a7a7a] mb-16">Skills</motion.h1>
        <div className="flex flex-col gap-y-32 w-full px-60 mx-auto mt-16">
          <motion.div className="flex h-full w-full justify-evenly items-center relative">
            <motion.div className="REACT flex justify-between items-center flex-col h-52">
              <motion.h2 className="text-2xl font-mono text-zinc-300 absolute -translate-y-[200%] left-0">
                Web Developer
              </motion.h2>
              <motion.div className="rounded-full w-fit p-6">
                <motion.img
                  src="./react.png"
                  alt="React Logo"
                  className="w-32"
                />
              </motion.div>
              <motion.p className="text-4xl font-thin font-mono text-[#7a7a7a] flex justify-center items-center">
                React
              </motion.p>
            </motion.div>

            <motion.div className="FIGMA flex justify-between items-center flex-col h-52">
              <motion.div className="rounded-full p-6">
                <motion.img
                  src="./figma.png"
                  alt="Figma Logo"
                  className="w-20"
                />
              </motion.div>
              <motion.p className="text-4xl font-mono font-thin text-[#7a7a7a] flex justify-center items-center">
                Figma
              </motion.p>
            </motion.div>

            <motion.div className="JAVA flex justify-between items-center flex-col h-52">
              <motion.div className="rounded-full p-6">
                <motion.img src="./java.png" alt="Java Logo" className="w-24" />
              </motion.div>
              <motion.p className="text-4xl font-mono font-thin text-[#7a7a7a] flex justify-center items-center">
                Java
              </motion.p>
            </motion.div>

            <motion.div className="MONGODB flex justify-between items-center flex-col h-52">
              <motion.div className="rounded-full p-6">
                <motion.img
                  src="./mongoDB.png"
                  alt="MongoDB Logo"
                  className="w-24"
                />
              </motion.div>
              <motion.p className="text-4xl font-mono font-thin text-[#7a7a7a] flex justify-center items-center">
                MongoDB
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div className="flex h-full w-full justify-evenly items-center relative">
            <motion.div className="UIPATH flex justify-between items-center flex-col h-40">
              <motion.h2 className="text-2xl font-mono text-zinc-300 absolute -translate-y-[200%] left-0">
                RPA Developer
              </motion.h2>
              <motion.div className="rounded-full w-fit p-6">
                <motion.img
                  src="./uipath.png"
                  alt="UiPath Logo"
                  className="w-48"
                />
              </motion.div>
              <motion.p className="text-4xl font-mono font-thin text-[#7a7a7a] flex justify-center items-center">
                Ui Path
              </motion.p>
            </motion.div>

            <motion.div className="BOTCITY flex justify-between items-center flex-col h-40">
              <motion.div className="rounded-full w-fit p-6">
                <motion.img
                  src="./botCity.png"
                  alt="BotCity Logo"
                  className="w-48"
                />
              </motion.div>
              <motion.p className="text-4xl font-mono font-thin text-[#7a7a7a] flex justify-center items-center">
                BotCity
              </motion.p>
            </motion.div>

            <motion.div className="POWERAUTOMATE flex justify-between items-center flex-col h-40">
              <motion.div className="rounded-full w-fit p-6">
                <motion.img
                  src="./powerAutomate.png"
                  alt="BotCity Logo"
                  className="w-20 translate-x-[7px]"
                />
              </motion.div>
              <motion.p className="text-4xl font-mono font-thin text-[#7a7a7a] flex justify-center items-center">
                Power Automate
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
