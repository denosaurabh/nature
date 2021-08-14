import { styled } from '@stitches/react';

interface HeadingProps {
  css?: Record<string, unknown>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any;
  bigFirstLetter?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  css,
  as,
  bigFirstLetter,
}) => {
  return (
    <HeadingStyled css={css} as={as} bigFirstLetter={bigFirstLetter}>
      {children}
    </HeadingStyled>
  );
};

export default Heading;

const HeadingStyled = styled('h1', {
  fontFamily: '$neutral',
  fontWeight: 'lighter',
  fontSize: '6rem',

  width: '80%',
  paddingRight: '2rem',

  minWidth: '20rem',
  maxWidth: '80rem',

  color: '#232323',

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
