import React from 'react';
import * as sc from './position.styles';

const Position = ({title, location, showDivider}) => {
  return (
    <div>
    <sc.Wrapper>
      <div>
        <sc.SectionHeader>{title}</sc.SectionHeader>
        <sc.SubSectionHeader>{location}</sc.SubSectionHeader>
      </div>
    </sc.Wrapper>
    {showDivider && <sc.HorizontalDivider />}
    </div>
  )
};

export default Position;
