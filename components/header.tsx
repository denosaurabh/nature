import Link from 'next/link';
import { motion } from 'framer-motion';

import { styled } from '@styled';

interface HeaderProps {
  css?: Record<string, unknown>;
}

const Header: React.FC<HeaderProps> = ({ children, css }) => {
  return (
    <HeaderContainer css={css} exit={{ display: 'none' }}>
      {children}
      <Text css={{ ml: 'auto' }}>
        exploration by <br />
        <Link href="https://github.com/denosaurabh" passHref>
          <a target="_blank">@denosaurabh</a>
        </Link>
      </Text>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled(motion.div, {
  width: '100%',

  padding: '2rem 4rem',

  display: 'flex',
  alignItems: 'center',

  a: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
});

const Text = styled('p', {
  fontFamily: '$modernist',
  fontSize: '1.8rem',

  color: '#383838',
});
