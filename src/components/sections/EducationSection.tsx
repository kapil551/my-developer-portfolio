import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";
import { fadeIn, textContainer } from "@libs/variants";

import SectionContainer from "@components/layouts/SectionContainer";
import SectionTitle from "@components/layouts/SectionTitle";
import { AnimateWhenVisible } from "@components/layouts";

const EducationSection = () => {

  return (
    <SectionContainer id="education">
      <AnimateWhenVisible variants={textContainer}>
        <SectionTitle title="Education" />
          <motion.div variants={fadeIn("up")} className="flex w-full flex-col space-y-4">
            <motion.div
              variants={fadeIn("up")}
              className="flex flex-col justify-center p-4 mt-4 space-y-4 text-base text-gray-300 border-b border-dashed rounded-sm cursor-pointer md:mt-0 md:text-3xl col-span-full md:col-span-1"
            >
              <div className="flex items-center space-x-2">
                <BiRightArrow className="text-green-400" />
                <span className="">
                  Bachelor In Technology, Computer Science and Engineering
                </span>
              </div>
              <div className="flex flex-col cursor-pointer justify-center space-y-2 ml-10">
                <span className="text-base sm:text-lg">2018 - 2022</span>
                <span className="text-base sm:text-lg font-bold">
                  G L Bajaj Institute of Technology and Management
                </span>
                <span className="text-base sm:text-lg">
                  Greate Noida, Uttar Pradesh, India
                </span>
                <span className="text-base sm:text-lg">CGPA: 8.15/10</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up")}
              className="flex flex-col justify-center p-4 mt-4 space-y-4 text-base text-gray-300 border-b border-dashed rounded-sm cursor-pointer md:mt-0 md:text-3xl col-span-full md:col-span-1"
            >
              <div className="flex items-center space-x-2">
                <BiRightArrow className="text-green-400" />
                <span className=""> 12th CBSE</span>
              </div>
              <div className="flex flex-col cursor-pointer justify-center space-y-2 ml-10">
                <span className="text-base sm:text-lg">2016 - 2017</span>
                <span className="text-base sm:text-lg font-bold">
                  Ramanlal Shorawala Public School
                </span>
                <span className="text-base sm:text-lg">
                  Mathura, Uttar Pradesh, India
                </span>
                <span className="text-base sm:text-lg">
                  Score: 77.20/100 (%)
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up")}
              className="flex flex-col justify-center p-4 mt-4 space-y-4 text-base text-gray-300 border-b border-dashed rounded-sm cursor-pointer md:mt-0 md:text-3xl col-span-full md:col-span-1"
            >
              <div className="flex items-center space-x-2">
                <BiRightArrow className="text-green-400" />
                <span className="">10th CBSE</span>
              </div>
              <div className="flex flex-col cursor-pointer justify-center space-y-2 ml-10">
                <span className="text-base sm:text-lg">2014 - 2015</span>
                <span className="text-base sm:text-lg font-bold">
                  Parvati Radhakishen Fomra School
                </span>
                <span className="text-base sm:text-lg">
                  Mathura, Uttar Pradesh, India
                </span>
                <span className="text-base sm:text-lg">
                  Score: 10/10 (CGPA)
                </span>
              </div>
            </motion.div>
          </motion.div>
      </AnimateWhenVisible>
    </SectionContainer>
  );
};

export default EducationSection;
