import Header from './components/header'
import Routes from './routes';
import { ThemeProvider } from "@carvana/showroom-theme";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
