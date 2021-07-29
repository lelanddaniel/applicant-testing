import React from 'react';
import * as sc from './navigation.styles';

const routesToShowNavigation = ['/positions', '/your-profile', '/applications'];

const Navigation = ({pathname}) => {

  if (!routesToShowNavigation.includes(pathname)) return null;

  return (
    <sc.Wrapper>
      <sc.navigationTile onClick={()=>{ document.location.href =  '/positions'}} selected={pathname === '/positions'}>Home</sc.navigationTile>
      <sc.navigationTile onClick={()=>{ document.location.href =  '/applications'}}selected={pathname === '/applications'}>Applications</sc.navigationTile>
    </sc.Wrapper>
  )
}

export default Navigation;
