import { CSS } from '@stitches/react/types/css-util';
import { styled } from '@styled';

interface CircleProps {
  css?: CSS;
}

const IndexCircle: React.FC<CircleProps> = ({ css }) => {
  return (
    <IndexCircleContainer css={css}>
      <CircleBox>
        <Circle
          color="dark"
          css={{ width: '10rem', height: '10rem', top: '10rem', zIndex: -1 }}
        />
        <Circle
          color="light"
          css={{
            width: '40rem',
            height: '40rem',
            zIndex: -2,
          }}
        />
      </CircleBox>
    </IndexCircleContainer>
  );
};

export default IndexCircle;

const IndexCircleContainer = styled('div', {
  position: 'absolute',

  width: 'fit-content',
  height: 'fit-content',
});

const CircleBox = styled('div', {
  position: 'relative',
});

const Circle = styled('div', {
  position: 'relative',
  borderRadius: '99999rem',

  variants: {
    color: {
      dark: {
        backgroundColor: '#A5A5A5',
        boxShadow: '0px 4px 85px rgba(55, 55, 55, 0.25)',
      },
      light: {
        backgroundColor: '#C4C4C4',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.07)',
      },
    },
  },

  defaultVariants: {
    color: 'dark',
  },
});
