import { styled } from '@styled';

const SectionBox = styled('div', {
  display: 'flex',

  alignItems: 'center',
  justifyContent: 'flex-end',

  width: '100%',
  position: 'relative',

  h2: {
    fontFamily: '$neutral',
    color: '$davysGrey',
    fontSize: '5rem',
    fontWeight: '400',

    padding: '1rem',

    backgroundColor: '$lightGray',

    position: 'relative',
    left: '25%',

    zIndex: 100,
  },

  p: {
    position: 'absolute',
    bottom: '-10%',
  },
});

export default SectionBox;
