import type { AppProps} from 'next/app'
import { globalStyles } from '@styled';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  globalStyles();

  return <Component {...pageProps} />
}

export default App;
