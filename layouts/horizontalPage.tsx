import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { styled } from '@styled';

import { SmoothScrollHorizontal } from '@components/smoothScroll';
import VisibleGrid from '@components/visibleGrid';
import PlanetHeader from '@components/planetHeader';
import Cursor from '@components/cursor';

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

const HorizontalPage: React.FC<PageProps> = ({ children, id }) => {
  const router = useRouter();

  return (
    <PageStyled
      id={id}
      key={router.route}
      className={id}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <VisibleGrid />
      <PlanetHeader />
      <Cursor />
      <SmoothScrollHorizontal>
        <ContentContainer>{children}</ContentContainer>
      </SmoothScrollHorizontal>
    </PageStyled>
  );
};

export default HorizontalPage;

const PageStyled = styled(motion.div, {
  overflowY: 'hidden',
});

const ContentContainer = styled('div', {
  display: 'flex',

  width: '100%',
  height: '100%',
});
