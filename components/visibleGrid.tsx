import { styled } from '@styled';

const VisibleGrid: React.FC = () => {
  return (
    <GridContainer>
      <Line css={{ t: '8%' }} />
      <Line css={{ t: '40%' }} />
      <Line css={{ t: '85%' }} />

      <Line css={{ l: '5%' }} vertical />
      <Line css={{ l: '60%' }} vertical />
    </GridContainer>
  );
};

const GridContainer = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
});

const Line = styled('hr', {
  width: '100%',
  height: 1,

  position: 'absolute',

  opacity: 0.5,

  border: 0,
  background: '$quickSilver',

  variants: {
    vertical: {
      true: {
        width: 1,
        height: '100%',
      },
    },
  },
});

export default VisibleGrid;
