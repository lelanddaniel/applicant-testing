/* eslint-disable default-case */
import React from 'react';
import { SectionHeader, SubSectionHeader } from '../../assets/styles';
import { PositionsList, EmbedYoutube } from '../../assets/components';
import * as sc from './welcome.styles';
import availablePositions from './welcome.config';

const getConfig = (profileComplete) => {
  switch(profileComplete) {
    case true:
      return {
        header: 'Job recommendations',
        subHeader:'These recommendations are based on your profile.'
      };
    case false:
      return {
        header: 'Featured positions',
        subHeader:'Be part of the team disrupting the car-buying status quo.'
      };
  }
}

const Welcome = (props) => {
  const { location: { search } = {} } = props;

  const profileComplete = search.includes('profileComplete');
  const config = getConfig(profileComplete);

  return (
    <sc.Wrapper padding={profileComplete ? 0 : 40}>
      {!profileComplete &&
        <sc.HelpGetToKnow>
          <div>
            <SectionHeader>Help us get to know you</SectionHeader>
            <SubSectionHeader>Your profile helps our recruiting team know who you are and what fits you.</SubSectionHeader>
          </div>
          <div>
            <sc.HelpGetToKnowButton onClick={() => document.location.href = '/your-profile'}>Complete profile</sc.HelpGetToKnowButton>
          </div>
        </sc.HelpGetToKnow>
      }
      <sc.Sections>
        <SectionHeader>{config.header}</SectionHeader>
        <SubSectionHeader>{config.subHeader}</SubSectionHeader>
        <PositionsList positions={availablePositions}/>
      </sc.Sections>
      <sc.Sections>
        <SectionHeader>Related blog post</SectionHeader>
        <sc.YoutubeWrapper>
          <EmbedYoutube embedId={'93pa9NmlrYc'} height={240} width={462}/>
          <EmbedYoutube embedId={'A_gNqghDrfA'} height={240} width={462}/>
        </sc.YoutubeWrapper>
      </sc.Sections>

    </sc.Wrapper>
  )
};

export default Welcome;
