import '../styles/globals.css';
import '../styles/auth.css';
import '../styles/chats.css';
import '../styles/index.css';
import { CardsProvider } from '../context/CardsContext';

function MyApp({ Component, pageProps }) {
  return (
    <CardsProvider>
      <Component {...pageProps} />
    </CardsProvider>
  );
}

export default MyApp;
