import { motion } from "framer-motion";
import { certifiates } from "@libs/data";
import CertificateCard from "@components/cards/CertificateCard";

import { textContainer } from "@libs/variants";
import { AnimateWhenVisible, SectionContainer, SectionTitle } from "@components/layouts";

const CertificatesSction = () => {
  return (
    <SectionContainer id="certificates">
      <SectionTitle title="Certifications" />
      <AnimateWhenVisible variants={textContainer}>
        <motion.div variants={textContainer} className="grid grid-cols-6 gap-6 mt-10 md:gap-12">
          {certifiates.map((certificate) => (
            <CertificateCard key={certificate.id} {...certificate} />
          ))}
        </motion.div>
      </AnimateWhenVisible>
    </SectionContainer>
  );
};

export default CertificatesSction;
