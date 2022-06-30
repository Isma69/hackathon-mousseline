import '../styles/globals.css';
import { CardsProvider } from '../context/CardsContext';

function MyApp({ Component, pageProps }) {
  return (
    <CardsProvider>
      <Component {...pageProps} />
    </CardsProvider>
  );
}

export default MyApp;
