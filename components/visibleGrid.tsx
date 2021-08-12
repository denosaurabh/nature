import { styled } from '@styled';

const VisibleGrid: React.FC = () => {
  return (
    <GridContainer>
      <Line css={{ t: '10%' }} />
      <Line css={{ t: '40%' }} />
      <Line css={{ t: '90%' }} />

      <Line css={{ l: '10%' }} vertical />
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
  position: 'absolute',

  opacity: 0.5,

  color: '$davysGrey',

  variants: {
    vertical: {
      true: {
        width: 'unset',
        height: '100%',
      },
    },
  },
});

export default VisibleGrid;
