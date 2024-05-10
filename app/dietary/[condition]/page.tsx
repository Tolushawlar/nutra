import React from "react";
import { Hero } from "@/app/(Components)/Hero";
import ConditionMenu from "@/app/(Components)/Menu/ConditionMenu";
import { Bespoke } from "@/app/(Components)/Bespoke";
import Faq from "@/app/(Components)/Faq";

function HealthCondition() {
  return (
    <>
      {/* <Hero /> */}
      <ConditionMenu />
      <Bespoke/>
      <Faq/>
    </>
  );
}

export default HealthCondition;
