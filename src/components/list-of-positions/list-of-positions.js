import React from 'react';
import { SectionHeader, SubSectionHeader } from '../../assets/styles';
import * as sc from './list-of-positions.styles';

const ListOfPositions = () => {

  return (
    <sc.Wrapper>
      <SectionHeader>Featured positions</SectionHeader>
      <SubSectionHeader>Be part of the team disrupting the car-buying status quo.</SubSectionHeader>
      <sc.PositionsSection>
        
      </sc.PositionsSection>

      <SectionHeader>Related blog post</SectionHeader>
    </sc.Wrapper>
  )
};

export default ListOfPositions;
