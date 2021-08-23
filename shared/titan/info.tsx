import ContentBox from '@components/contentBox';
import { styled } from '@styled';

const TitanInfo: React.FC = () => {
  return (
    <ContentBox center>
      <InfoBox>
        <h4>
          But these opposite qualities does not make Titan any less good place
          for making a civilization
        </h4>
        <p>Titan is full of opportunities</p>
      </InfoBox>
    </ContentBox>
  );
};

export default TitanInfo;

const InfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  width: '60rem',
  gap: '4rem',

  h4: {
    fontFamily: '$neutral',
    color: '#383838',
    fontSize: '3.2rem',
    fontWeight: '400',
  },

  p: {
    fontFamily: '$modernist',
    fontSize: '1.8rem',
    lineHeight: '140%',
  },
});
