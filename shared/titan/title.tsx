import ContentBox from '@components/contentBox';
import Heading from '@components/heading';

const TitanTitle: React.FC = () => {
  return (
    <ContentBox
      css={{
        marginRight: '12rem',
      }}
    >
      <Heading
        as="h1"
        css={{
          fontSize: '16rem',
          marginTop: '10%',
          marginLeft: '20%',
        }}
        bigFirstLetter
      >
        TITAN
      </Heading>

      <Heading
        as="h1"
        css={{
          fontFamily: '$modernist',
          fontSize: '3rem',
          marginLeft: '20%',
        }}
      >
        Saturn largest and Solar System second largest moon
        <br />
        <br />
        &rarr; 886M miles away from Sun
        <br />
        <br />
        &rarr; First discoved by Christiaan Huygens on 25 March 1655
        <br />
        <br />
        &rarr; NASA&apos;s Planned mission to launch on 2027
      </Heading>
    </ContentBox>
  );
};

export default TitanTitle;
