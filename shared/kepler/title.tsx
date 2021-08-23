import ContentBox from '@components/contentBox';
import Heading from '@components/heading';

const KeplerTitle: React.FC = () => {
  return (
    <ContentBox flex alignBottom>
      <Heading
        as="h1"
        css={{
          width: '250rem',
          maxWidth: 'unset',
          fontSize: '32rem',
          marginTop: '10%',
          marginLeft: '20%',
        }}
      >
        KEPLER-62F
      </Heading>
    </ContentBox>
  );
};

export default KeplerTitle;
