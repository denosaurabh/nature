import type { AppProps } from 'next/app';
import { AnimatePresence, motion } from 'framer-motion';

import { globalStyles } from '@styled';

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  globalStyles();

  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        key={router.route}
        transition={{ duration: 0 }}
        exit={{ x: 0 }}
      >
        <Component {...pageProps} key={router.route} />
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
