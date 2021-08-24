import ContentBox from '@components/contentBox';
import Heading from '@components/heading';

const KeplerEnd: React.FC = () => {
  return (
    <ContentBox flex center>
      <Heading
        css={{
          maxWidth: 'unset',
          width: '150rem',
          margin: '0 20rem',
          fontSize: '4rem',
        }}
      >
        After All, it is too far away to say anything, we can only look a very
        limited data with a lot of assumptions. The search for extraterrestrial
        life will go on and we will continue finding the answer to this question
        &quot;Are we alone?&quot;
      </Heading>
    </ContentBox>
  );
};

export default KeplerEnd;
