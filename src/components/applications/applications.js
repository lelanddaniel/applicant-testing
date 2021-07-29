import React from "react";
import {
  SectionHeader,
  SubSectionHeader,
} from "../../assets/styles/section-headers";
import * as sc from "./application.styles";
import { PositionsList } from "../../assets/components";
import appliedPositions from "./applications.config";

const Applications = () => {
  return (
    <sc.ContentWrapper>
      <sc.PositionsSection>
        <SectionHeader>Current Applications</SectionHeader>
        <SubSectionHeader>
          Here are roles you are interviewing for.
        </SubSectionHeader>
        <PositionsList positions={appliedPositions} />
      </sc.PositionsSection>
      <sc.DividerLine></sc.DividerLine>
      <sc.PositionsSection>
        <SectionHeader>Past Applications</SectionHeader>
        <SubSectionHeader>
          Here are roles you interviewed for in the past. You're welcome to
          apply again anytime. To be reconsidered for the same role, we suggest
          waiting one year between applications.
        </SubSectionHeader>
        <PositionsList positions={appliedPositions} />
      </sc.PositionsSection>
    </sc.ContentWrapper>
  );
};

export default Applications;
