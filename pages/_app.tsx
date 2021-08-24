import type { AppProps } from 'next/app';
import { AnimatePresence, motion } from 'framer-motion';
import { DefaultSeo } from 'next-seo';

import { globalStyles } from '@styled';

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  globalStyles();

  console.log(
    `eyy! you code, here's the Github repo: https://github.com/denosaurabh/nature`
  );

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
        <DefaultSeo
          title="Nature"
          description="Exploring far Planets and Moons for Alien Life and Nature"
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://nature-denosaurabh.vercel.app/',
            site_name: 'Nature',
          }}
          twitter={{
            handle: '@denosaurabh',
            site: '@denosaurabh',
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} key={router.route} />
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
