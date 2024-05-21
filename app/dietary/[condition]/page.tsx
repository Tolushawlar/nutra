"use client"
import React, { useEffect, useState } from "react";
import { Hero } from "@/app/(Components)/Hero";
import ConditionMenu from "@/app/(Components)/Menu/ConditionMenu";
import { Bespoke } from "@/app/(Components)/Bespoke";
import Faq from "@/app/(Components)/Faq";

function HealthCondition() {
  const [condition, setCondition] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Get the current URL
    const currentURL = window.location.href;
    // Decode the URL
    const decodedURL = decodeURIComponent(currentURL);
    // Split the URL by "/"
    const urlParts = decodedURL.split('/');
    // Get the last item from the array
    const lastItem = urlParts[urlParts.length - 1];
    // Set the last item as the condition
    setCondition(lastItem.toLowerCase());
  }, []);

  return (
    <>
      {/* <Hero /> */}
      <p className="text-[57px] font-[700] mt-[60px] font-Roboto-Black text-center text-[#211F26]">
        Our <span className=" text-[#17CC29]">{condition}</span> Menu
      </p>
      <ConditionMenu />
      <Bespoke />
      <Faq />
    </>
  );
}

export default HealthCondition;
