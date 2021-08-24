import ContentBox from '@components/contentBox';
import Text from '@components/text';

const KeplerDescription: React.FC = () => {
  return (
    <ContentBox flex alignBottom css={{ width: '50rem' }}>
      <Text css={{ marginBottom: '30%' }}>
        Kepler-62f also known as Super-Earth, is an exoplanet orbiting the star
        Kepler 62, which is about 990 light-years away from Earth in the
        constellation of Lyra. It was first discovered by NASA&apos;s Kepler
        Spacecraft.
        <br />
        <br />
        <p>Learn more about Kepler 62F &rarr;</p>
        <br />
      </Text>
    </ContentBox>
  );
};

export default KeplerDescription;
