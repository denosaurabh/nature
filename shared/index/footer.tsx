import Link from 'next/link';
import Heading from '@components/heading';

const IndexFooter: React.FC = () => {
  return (
    <>
      <Heading
        css={{
          fontFamily: '$modernist',
          fontSize: '3rem',
          margin: '25% 0 5rem 10%',
        }}
      >
        All graphics (except credited), design and development is done by{' '}
        <Link href="https://github.com/denosaurabh" passHref>
          <a target="_blank">@denosaurabh</a>
        </Link>
      </Heading>

      <Heading
        css={{
          fontFamily: '$modernist',
          fontSize: '3rem',
          margin: '5% 0 5rem 10%',
        }}
      >
        This website is made for a Web Jam submission I have participated in.
      </Heading>

      <Heading
        css={{
          fontFamily: '$modernist',
          fontSize: '3rem',
          margin: '5% 0 5rem 10%',
        }}
      >
        This is a NON-Commercial project.
      </Heading>

      <Heading
        css={{
          fontFamily: '$modernist',
          fontSize: '3rem',
          margin: '5% 0 5rem 10%',
        }}
      >
        The graphics shown in the website may not be completely correct to the
        specific topic, due to time constraints and purpose of this project.
      </Heading>
    </>
  );
};

export default IndexFooter;
