import { styled } from '@styled';

const PlanetHeader: React.FC = () => {
  return (
    <PlanetHeaderContainer>
      <Text>
        &larr; <br />
        Back
      </Text>
    </PlanetHeaderContainer>
  );
};

export default PlanetHeader;

const PlanetHeaderContainer = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,

  zIndex: 1000,

  minWidth: '8rem',
  height: '100vh',

  padding: '1rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  backgroundColor: '$lightGray',
  borderRight: '1px solid $quickSilver',

  '@mobile': {
    width: '100vw',
    height: '8rem',
    borderBottom: '1px solid $quickSilver',

    flexDirection: 'row',
  },
});

const Text = styled('p', {
  fontFamily: '$modernist',
  fontSize: '1.8rem',
  color: '#383838',

  '&:hover': {
    cursor: 'pointer',
  },
});
