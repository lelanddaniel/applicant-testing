import React from 'react';
import { SectionHeader, SubSectionHeader } from '../../assets/styles';
import * as sc from './list-of-positions.styles';
import availablePositions from './list-of-positions.config';
import Position from './components/position';

const ListOfPositions = () => {

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
        <sc.PositionsListSection>
        {availablePositions.map((position, index) => {
            return (
              <Position
                title={position.title}
                location={position.location}
                showDivider={index !== availablePositions.length - 1}
                key={position.id}
              />
            );
          })}
        </sc.PositionsListSection>
      </sc.PositionsSection>

      <SectionHeader>Related blog post</SectionHeader>
    </sc.Wrapper>
  )
};

export default ListOfPositions;
