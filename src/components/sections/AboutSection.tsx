import { motion } from "framer-motion";
import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import { fadeIn, textContainer } from "@libs/variants";

import SectionContainer from "@components/layouts/SectionContainer";
import SectionTitle from "@components/layouts/SectionTitle";
import { AnimateWhenVisible } from "@components/layouts";

const AboutSection = () => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <SectionContainer id="about">
      <AnimateWhenVisible variants={textContainer}>
        <SectionTitle title="About Me" />
        <motion.div variants={fadeIn("up")} className="flex flex-col space-y-4">
          <motion.div className="flex flex-col mb-4 space-y-2 text-base sm:text-lg">
            <p>• Hi, I am a fresher and still to start my professional career journey but I am constantly working on improving my skills and learning new tools and technologies.</p>
            <p>
              • I love problem-solving and would love to work on challenging problems.
            </p>
            <p>
              • I am currently learning about Redux data flow and global state management using Redux and React-Redux.
            </p>
            <p>
              • I am also improving my familiarity with Node.js, Express.js, and Rest API.
            </p>
            <p>
              • My primary interest is in Web Development and Mobile Application Development.
            </p>
          </motion.div>
          <motion.div className="flex flex-col w-full sm:flex-row ">
            <motion.div className="flex-1 text-base sm:text-lg col-span-full md:col-span-1">
              {/* add border triangle to highlight this section */}
              <p className="mb-2">My Tech Stack:</p>

              <div className="grid grid-cols-3 gap-3 text-sm md:place-items-center sm:text-base">
                <div className="space-y-3 col-span-full md:col-span-1 ">
                  <div className="flex items-center space-x-2">
                    <BiRightArrow className="text-green-400" />
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BiRightArrow className="text-green-400" />
                    <span>React Js</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BiRightArrow className="text-green-400" />
                    <span>Redux & React-Redux </span>
                  </div>
                </div>
                <div className="flex-1 space-y-3 md:col-span-1">
                  <div className="flex items-center space-x-2">
                    <BiRightArrow className="text-green-400" />
                    <span>React Native</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BiRightArrow className="text-green-400" />
                    <span>Next Js </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BiRightArrow className="text-green-400" />
                    <span>Tailwind CSS </span>
                  </div>
                </div>
                <div className="space-y-3 col-span-full md:col-span-1 ">
                  <div className="flex items-center space-x-2">
                    <BiRightArrow className="text-green-400" />
                    <span>HTML5</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BiRightArrow className="text-green-400" />
                    <span>CSS3</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BiRightArrow className="text-green-400" />
                    <span>Git & Github</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up")}
              className="flex justify-center p-4 mt-4 space-x-4 text-base text-gray-300 border border-dashed rounded-sm cursor-pointer md:mt-0 md:text-3xl col-span-full md:col-span-1"
              onClick={() => {
                navigator.clipboard.writeText("chaudharikapil16@gmail.com");
                setIsCopied(true);
              }}
            >
              <span className="flex-none ">Email : </span>
              <div className="flex flex-col cursor-pointer">
                <span className="">chaudharikapil16@gmail.com</span>
                <span className="text-sm text-right text-gray-400 ">{isCopied ? "copied" : "click to copy!"}</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimateWhenVisible>
    </SectionContainer>
  );
};

export default AboutSection;
