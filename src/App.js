import Header from './components/header'
import Routes from './routes';
import styled from "styled-components";
import { ThemeProvider } from "@carvana/showroom-theme";

const MainWrapper = styled.div`
  height: 100vh;
  width: 100%;
  font-family: ${(props) => props.theme.font.family};
  background: #CFEAF2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #eef2f3,
    #CFEAF2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #eef2f3,
    #CFEAF2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

function App() {
  return (
    <ThemeProvider>
      <MainWrapper>
        <Header />
        <Routes />

      </MainWrapper>
    </ThemeProvider>
  );
}

export default App;
