import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from "styled-components";
import { Banner, Navigation } from '../../assets/components';
import WelcomeScreen from '../welcome';
import ListOfPositions from "../list-of-positions";
import Registration from '../registration';
import SignIn from '../signin';
import YourProfile from "../your-profile";

const RoutesWrapper = styled.div`
  height: 100%;
  width: 100%;
  font-family: ${(props) => props.theme.font.family};
  background: #CFEAF2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eef2f3,
    #CFEAF2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eef2f3,
    #CFEAF2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Wrapper = styled.div`
  background: #eef2f3;
  width: 100%;
`;

const Routes = props => {
  const { location: { pathname } = {} } = props;

  return(
    <Router>
      <Navigation pathname={pathname}/>
      <RoutesWrapper>
      <Banner pathname={pathname}/>
        <Switch>
          <Route path="/positions">
            <Wrapper>
              <ListOfPositions />
            </Wrapper>
          </Route>
          <Route path="/your-profile">
            <Wrapper>
              <YourProfile />
            </Wrapper>
          </Route>
          <Route path="/applications">
            <Wrapper>
              <YourProfile />
            </Wrapper>
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <WelcomeScreen />
          </Route>
        </Switch>
      </RoutesWrapper>
    </Router>
  )
}

export default Routes;
