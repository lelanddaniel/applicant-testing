import Header from '../header'
import { withRouter } from 'react-router-dom';
import Routes from './routes';
import { ThemeProvider } from "@carvana/showroom-theme";

const App = (props) => {
  return (
    <ThemeProvider>
      <Header />
      <Routes {...props}/>
    </ThemeProvider>
  );
}

export default withRouter(App);
