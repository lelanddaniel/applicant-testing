import React from "react";
import {
  SectionHeader,
  SubSectionHeader,
} from "../../assets/styles/section-headers";
import { ChallengeList } from "../../assets/components";
import * as sc from "./tests.styles";
import availableTests from "./tests.config";

const Tests = () => {
  return (
    <sc.ContentWrapper>
      <sc.PositionsSection>
        <SectionHeader>Select your test</SectionHeader>
        <SubSectionHeader>
          We’ve created tests based on different levels. Please select one that
          you think fits your level the most. Coding challenges will provide you
          with the opportunity to impress our Carvana Engineers and get your
          application into the Fast Lane!
        </SubSectionHeader>
        <ChallengeList challenges={availableTests} />
      </sc.PositionsSection>
    </sc.ContentWrapper>
  );
};

export default Tests;
