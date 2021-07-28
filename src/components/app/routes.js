import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from "styled-components";
import Navigation from "../navigation";
import WelcomeScreen from '../welcome';
import Registration from '../registration';

const RoutesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 104px);
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

const Routes = props => {
  const { location: { pathname } = {} } = props;

  return(
    <Router>
      <Navigation pathname={pathname}/>
      <RoutesWrapper>
        <Switch>
        <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/registration">
            <Registration />
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
