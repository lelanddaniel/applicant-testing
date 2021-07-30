import React from 'react';
import * as sc from './navigation.styles';
import NavigationConfig from './navigation.config';

const routesToShowNavigation = ['/welcome', '/your-profile', '/applications', '/tests'];

const Navigation = ({pathname}) => {

  if (!routesToShowNavigation.includes(pathname)) return null;

  return (
    <sc.Wrapper>
      {NavigationConfig.map((navItem, index) => {
            return (
              <sc.navigationTile
                key={navItem.id}
                onClick={()=>{document.location.href =  navItem.path}}
                selected={pathname === navItem.path}>
                {navItem.title}
              </sc.navigationTile>
            );
          })}
    </sc.Wrapper>
  )
}

export default Navigation;
