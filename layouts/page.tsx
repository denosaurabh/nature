import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { styled } from '@styled';

import VisibleGrid from '@components/visibleGrid';
import { SmoothScrollVertical } from '@components/smoothScroll';
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

const Page: React.FC<PageProps> = ({ children, id }) => {
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
      <Cursor />
      <SmoothScrollVertical>{children}</SmoothScrollVertical>
    </PageStyled>
  );
};

export default Page;

const PageStyled = styled(motion.div, {
  position: 'relative',

  width: '100%',
  height: '100vh',
});
