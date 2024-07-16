import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { PortabilidadeProvider } from '../../context/PortabilidadeContext';
import { initGTM } from '../lib/gtm';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initGTM();
  }, []);
  
  return (
    <PortabilidadeProvider>
      <Component {...pageProps} />
    </PortabilidadeProvider>
  );
}

export default App;
