import ContentBox from '@components/contentBox';
import Text from '@components/text';

const KeplerDescription: React.FC = () => {
  return (
    <ContentBox
      flex
      alignBottom
      css={{ padding: '10% 0 5% 0', width: '50rem' }}
    >
      <Text>
        Kepler-62f also known as Super Earth, is a exoplanet oribiting the star
        Kepler 62, which is about 990 light years away from Earth in the
        constellation of Lyra. It was first discovered by NASA&apos;s Kepler
        Spacecraft.
      </Text>
    </ContentBox>
  );
};

export default KeplerDescription;
