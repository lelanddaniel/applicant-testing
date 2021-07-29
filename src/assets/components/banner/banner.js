import React from 'react';
import * as sc from './banner.styles';
import { StuckHomeMonitor, StuckHomeWorkingfromHome, StuckHomeToDoList } from '../../../assets/images';

const getConfigForRoute = (pathname, username) => {
  let config = {
    image: null,
    text: null
  };

  switch(pathname) {
    case '/welcome':
      config.image = StuckHomeWorkingfromHome;
      config.text = `Welcome ${username}!`;
      break;
    case '/your-profile':
      config.image = StuckHomeMonitor;
      config.text = 'Your Profile';
      break;
    case '/applications':
      config.image = StuckHomeToDoList;
      config.text = 'Applications';
      break;
    default:
      config.image = StuckHomeWorkingfromHome;
      config.text = `Welcome!`;
  }

  return config;
}

const routesToShowBanner = ['/welcome', '/your-profile', '/applications'];

const Banner = ({pathname}) => {
  const username = 'Josh'
  const config = getConfigForRoute(pathname, username);

  if (!routesToShowBanner.includes(pathname)) return null;

  return (
    <sc.Wrapper>
      <sc.ContentWrapper>
        <sc.LeftText>{config.text}</sc.LeftText>
        <sc.ImageWrapper src={config.image} alt='Primary'/>
      </sc.ContentWrapper>
    </sc.Wrapper>
  )
};

export default Banner;