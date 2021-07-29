import React from 'react';
import * as sc from './positions-list.styles';
import Position from './position';

const PositionsList = ({positions}) => {
  return (
    <sc.PositionsListSection>
      {positions.map((position, index) => {
          return (
            <Position
              title={position.title}
              location={position.location}
              showDivider={index !== positions.length - 1}
              key={position.id}
            />
          );
        })}
      </sc.PositionsListSection>
  )
}

export default PositionsList;
