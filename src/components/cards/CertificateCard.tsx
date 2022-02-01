import { AiFillCode } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { FC } from "react";
import { Certificate } from "@libs/types";
import { motion } from "framer-motion";
import { fadeIn } from "@libs/variants";

const CertificateCard: FC<Certificate> = ({ title, image, duration, certificateLink, organisation }) => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <motion.div
      variants={fadeIn()}
      className="flex flex-col p-4 space-y-4 bg-[#040404] border border-gray-600 bg-gradient rounded-md shadow-xl col-span-full sm:col-span-3 md:col-span-2 projectCard"
    >
      <div className="flex items-center justify-between">
        <AiFillCode className="w-10 h-10 text-green-400" />
        <FiExternalLink className="w-6 h-6 cursor-pointer" onClick={() => openLink(certificateLink)} />
      </div>
      <div className="border border-gray-700">
        <Image src={image} objectFit="cover" alt="youtube card" />
      </div>
      <h2 className="text-lg">{title}</h2>

      <div className="flex justify-between text-sm">
        <span>{organisation}</span>
        <span>{duration}</span>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
