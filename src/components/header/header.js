import React from "react";
import * as sc from './header.styles';
import Primary from '../../assets/images/PrimaryLogo.svg';

const Header = () => {

  return (
    <sc.HeaderWrapper>
      <sc.ImageWrapper src={Primary} alt='Primary'/>
      <sc.FastLane>Fast Lane</sc.FastLane>
      <sc.PipeDivider />
      <sc.CareerProfile>Career Profile</sc.CareerProfile>

    </sc.HeaderWrapper>
  )
}

export default Header;
