import { CSS } from '@stitches/react/types/css-util';
import { motion } from 'framer-motion';

import { styled } from '@styled';

interface HeadingProps {
  css?: CSS;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any;
  bigFirstLetter?: boolean;
  block?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  css,
  as,
  bigFirstLetter,
  block,
}) => {
  return (
    <HeadingContainer
      css={css}
      block={block}
      initial={block ? { backgroundPositionX: '-30%' } : null}
      animate={block ? { backgroundPositionX: '0%' } : null}
      transition={{ ease: 'anticipate', duration: 2 }}
    >
      <HeadingStyled as={as} bigFirstLetter={bigFirstLetter}>
        {children}
      </HeadingStyled>
    </HeadingContainer>
  );
};

export default Heading;

const HeadingContainer = styled(motion.div, {
  width: '80%',
  paddingRight: '2rem',

  minWidth: '20rem',
  maxWidth: '80rem',

  fontFamily: '$neutral',
  fontWeight: 'lighter',
  fontSize: '6rem',

  color: '#232323',

  variants: {
    block: {
      true: {
        // backgroundImage: 'url("assets/img/space-black.jpg")',
        // backgroundRepeat: 'no-repeat',

        textDecoration: 'line-through',
        textDecorationThickness: '40px',

        userSelect: 'none',
      },
    },
  },
});

const HeadingStyled = styled('h1', {
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  fontSize: 'inherit',

  variants: {
    bigFirstLetter: {
      true: {
        '&::first-letter': {
          fontFamily: '$maghfirea',
          fontSize: '200%',
        },
      },
    },
  },
});
