import React from 'react';
import * as sc from './banner.styles';
import { StuckHomeMonitor, StuckHomeWorkingfromHome, StuckHomeToDoList } from '../../../assets/images';

const getImage = (pathname) => {
  let image = null;
  switch(pathname) {
    case '/positions':
      image = StuckHomeWorkingfromHome;
      break;
    case '/your-profile':
      image = StuckHomeMonitor;
      break;
    case '/applications':
      image = StuckHomeToDoList;
      break;
    default:
      image = StuckHomeWorkingfromHome;
  }

  return image;
}

const routesToShowBanner = ['/positions', '/your-profile', '/applications'];

const Banner = ({pathname}) => {
  const image = getImage(pathname);

  if (!routesToShowBanner.includes(pathname)) return null;
  
  return (
    <sc.Wrapper>
      <sc.ContentWrapper>
        <sc.LeftText>Welcome Josh!</sc.LeftText>
        <sc.ImageWrapper src={image} alt='Primary'/>
      </sc.ContentWrapper>
    </sc.Wrapper>
  )
};

export default Banner;