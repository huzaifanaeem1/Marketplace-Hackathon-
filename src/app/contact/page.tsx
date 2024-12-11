import { ContactHeroSection, LetsTalk, OurOffice } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="bg-white text-myHeading">
      <ContactHeroSection />

      <OurOffice />
      <LetsTalk />
    </div>
  );
};

export default page;
