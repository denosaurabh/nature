import { styled } from '@stitches/react';

interface HeadingProps {
  css?: Record<string, unknown>;
}

const Heading: React.FC<HeadingProps> = ({ children, css }) => {
  return <HeadingStyled css={css}>{children}</HeadingStyled>;
};

export default Heading;

const HeadingStyled = styled('h1', {
  fontFamily: '$neutral',
  fontWeight: 'lighter',
  fontSize: '6rem',

  width: '100%',
  minWidth: '20rem',
  maxWidth: '80rem',

  color: '#232323',
});
