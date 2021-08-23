import { styled } from '@styled';

export const FeatureContainer = styled('div', {
  display: 'flex',
  gap: '8rem',
});

export const FeatureBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  width: '40rem',
  gap: '2rem',

  margin: '4rem',

  fontFamily: '$modernist',
  fontSize: '1.6rem',
  color: '#383838',

  h5: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },

  p: {
    fontSize: '1.6rem',
    lineHeight: '140%',
  },
});
