import React from 'react';
import * as sc from './navigation.styles';

const routesToNotShowNavigation = ['/', '/registration'];

const Navigation = ({pathname}) => {

  if (routesToNotShowNavigation.includes(pathname)) return null;

  return (
    <sc.Wrapper>
      <sc.navigationTile selected={pathname === '/'}>Home</sc.navigationTile>
      <sc.navigationTile selected={pathname === '/applications'}>Applications</sc.navigationTile>
    </sc.Wrapper>
  )
}

export default Navigation;
