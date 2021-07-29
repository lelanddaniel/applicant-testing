import React from 'react';
import { SectionHeader, SubSectionHeader } from '../../assets/styles';
import * as sc from './welcome.styles';
import { PositionsList } from '../../assets/components';
import availablePositions from './welcome.config';

const Welcome = () => {
  return (
    <sc.Wrapper>
      <sc.HelpGetToKnow>
        <div>
          <SectionHeader>Help us get to know you</SectionHeader>
          <SubSectionHeader>Your profile helps our recruiting team know who you are and what fits you.</SubSectionHeader>
        </div>
        <div>
          <sc.HelpGetToKnowButton>Complete profile</sc.HelpGetToKnowButton>
        </div>
      </sc.HelpGetToKnow>
      <sc.PositionsSection>
        <SectionHeader>Featured positions</SectionHeader>
        <SubSectionHeader>Be part of the team disrupting the car-buying status quo.</SubSectionHeader>
        <PositionsList positions={availablePositions}/>
      </sc.PositionsSection>

      <SectionHeader>Related blog post</SectionHeader>
    </sc.Wrapper>
  )
};

export default Welcome;
