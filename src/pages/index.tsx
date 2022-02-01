import { SplashScreen } from "@components/layouts";
import Head from "next/head";

import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  CertificatesSction,
  EducationSection,
} from "@components/sections";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Kapil Chaudhary | Software Developer | Portfolio </title>
      </Head>
      <SplashScreen />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <CertificatesSction />
      <ContactSection />
    </>
  );
};

export default HomePage;
