import Landing from './Screens/Landing Page/LandingPage';
import { LanguageProvider } from './i18n';

function App() {
  return <LanguageProvider><Landing /></LanguageProvider>;
}

export default App;
