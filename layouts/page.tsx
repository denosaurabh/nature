import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { styled } from '@styled';

import VisibleGrid from '@components/visibleGrid';
// import SmoothScroll from '@components/smoothScroll';

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: 'anticipate',
      type: 'intertia',
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'anticipate', duration: 0.5 },
  },
};

interface PageProps {
  id: string;
}

const Page: React.FC<PageProps> = ({ children, id }) => {
  const router = useRouter();

  const handleAnimationComplete = () => {
    console.log('Animation complete');
  };

  return (
    <PageStyled
      id={id}
      key={router.route}
      className={id}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={handleAnimationComplete}
    >
      <VisibleGrid />
      <Content>
        {/* <SmoothScroll> */}
        {children}
        {/* </SmoothScroll> */}
      </Content>
    </PageStyled>
  );
};

export default Page;

const PageStyled = styled(motion.div, {
  width: '100%',
  height: '100%',

  position: 'fixed',
  top: 0,
  left: 0,
});

const Content = styled(motion.div, {
  position: 'absolute',
  top: 0,
  left: 0,

  zIndex: 100,

  width: '100%',
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',

  overflowY: 'scroll',

  // display: 'grid',
  // gridTemplateColumns: '1fr 1fr 2fr 3fr 5fr 2fr 2fr 2fr 1fr 1fr 3fr',
  // gridTemplateRows: '1fr 1fr 2fr 2fr 1fr 2fr 2fr 1fr 1fr',
});
