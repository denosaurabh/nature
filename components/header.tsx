import Link from 'next/link';
import { motion } from 'framer-motion';

import { styled } from '@styled';

interface HeaderProps {
  css?: Record<string, unknown>;
}

const Header: React.FC<HeaderProps> = ({ children, css }) => {
  return (
    <HeaderContainer css={css} exit={{ display: 'none' }}>
      <Text
        css={{
          fontSize: '2.6rem',
          fontFamily: '$maghfirea',
          fontWeight: 'bold',
          lineHeight: '18px',
        }}
      >
        Na&#x25D7;
        {/* &#x25EF; */}
        <br />
        ture
        <br />
        &#x25E1;
      </Text>
      {children}
      <Text css={{ ml: 'auto' }}>
        exploration by <br />
        <Link href="https://github.com/denosaurabh" passHref>
          <a target="_blank" rel="noreferrer">
            @denosaurabh
          </a>
        </Link>
      </Text>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled(motion.div, {
  width: '100%',

  padding: '1rem 3rem 2rem 2rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

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
