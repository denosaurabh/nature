import ContentBox from '@components/contentBox';
import { styled } from '@styled';

const TitanInfo: React.FC = () => {
  return (
    <ContentBox center>
      <InfoBox>
        <h4>
          “On Titan the molecules that have been raining down like manna from
          heaven for the last 4 billion years might still be there largely
          unaltered deep-frozen awaiting the chemists from Earth”
        </h4>
        <p>- Carl Sagan</p>
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
