import ContentBox from '@components/contentBox';
import Text from '@components/text';
import Heading from '@components/heading';

const TitanCredits: React.FC = () => {
  return (
    <ContentBox
      flex
      flexColumn
      css={{
        padding: '10vh 10rem',
        gap: '2rem',
        borderLeft: '1px solid #999999',
        borderRight: '1px solid #999999',
      }}
    >
      <Heading>Credits</Heading>
      <Text
        as="a"
        href="https://solarsystem.nasa.gov/moons/saturn-moons/titan/in-depth/"
        target="_blank"
      >
        https://solarsystem.nasa.gov/moons/saturn-moons/titan/in-depth/
      </Text>
      <Text
        as="a"
        href="https://en.wikipedia.org/wiki/Titan_(moon)"
        target="_blank"
      >
        https://en.wikipedia.org/wiki/Titan_(moon)
      </Text>
      <Text
        as="a"
        href="https://www.nasa.gov/dragonfly/images/index.html"
        target="_blank"
      >
        https://www.nasa.gov/dragonfly/images/index.html
      </Text>
      <Text
        as="a"
        href=" https://en.wikipedia.org/wiki/Cassini%E2%80%93Huygens"
        target="_blank"
      >
        https://en.wikipedia.org/wiki/Cassini%E2%80%93Huygens
      </Text>
    </ContentBox>
  );
};

export default TitanCredits;
