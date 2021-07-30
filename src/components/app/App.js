import Header from '../header'
import { withRouter } from 'react-router-dom';
import Routes from './routes';
import { ThemeProvider } from "@carvana/showroom-theme";
import Footer from '../footer';

const App = (props) => {
  return (
    <ThemeProvider>
      <Header />
      <Routes {...props}/>
      <Footer />
    </ThemeProvider>
  );
}

export default withRouter(App);
