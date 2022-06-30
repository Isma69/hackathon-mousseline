import '../styles/globals.css';
import '../styles/auth.css';
import '../styles/chats.css';
import '../styles/index.css';
import { CardsProvider } from '../cardContext/CardsContext';
import { ContextProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
    <CardsProvider>
      <Component {...pageProps} />
    </CardsProvider>
    </ContextProvider>
  );
}

export default MyApp;
