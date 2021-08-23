import ContentBox from '@components/contentBox';
import Heading from '@components/heading';
import Text from '@components/text';

const KeplerCredits: React.FC = () => {
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
        href="https://en.wikipedia.org/wiki/Kepler-62f"
        target="_blank"
      >
        https://en.wikipedia.org/wiki/Kepler-62f
      </Text>
    </ContentBox>
  );
};

export default KeplerCredits;
