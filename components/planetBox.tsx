import { styled } from '@styled';

const PlanetBox: React.FC = ({ children }) => {
  return <PlanetBoxStyled>{children}</PlanetBoxStyled>;
};

export default PlanetBox;

const PlanetBoxStyled = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',

  '@mobile': {
    flexWrap: 'wrap',
  },

  span: {
    fontFamily: '$maghfirea',
    fontSize: '14rem',

    color: '$quickSilver',

    marginRight: '4rem',

    '@tablet': {
      fontSize: '8rem',
      marginRight: '2rem',
    },
  },

  h3: {
    flex: 1,

    fontFamily: '$neutral',
    fontSize: '6.4rem',
    fontWeight: 'lighter',
    color: '#232323',

    marginRight: '4rem',

    '@tablet': {
      fontSize: '4.8rem',
      marginRight: '2rem',
    },

    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },

  p: {
    fontFamily: '$modernist',
    fontSize: '1.8rem',
    color: '$grayWeb',

    textAlign: 'right',

    width: '30rem',
    minWidth: '20rem',

    '@mobile': {
      flex: 1,
    },
  },
});
