import WelcomeScreen from "./components/welcome";
import styled from "styled-components";
import { ThemeProvider } from "@carvana/showroom-theme";

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-family: ${(props) => props.theme.font.family};
`;

function App() {
  return (
    <ThemeProvider>
      <MainWrapper>
        <div style={{height: '104px'}}></div>
        <WelcomeScreen />
      </MainWrapper>
    </ThemeProvider>
  );
}

export default App;
