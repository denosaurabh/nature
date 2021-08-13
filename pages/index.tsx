import Image from 'next/image';
import Link from 'next/link';

import { styled } from '@styled';

import Page from '@layouts/page';
import Header from '@components/header';
import Heading from '@components/heading';

const Home: React.FC = () => {
  return (
    <Page id="home">
      <Header>
        <Link href="/video" passHref>
          <Text css={{ ml: 'auto' }}>SEE VIDEO</Text>
        </Link>
      </Header>

      <Heading css={{ marginTop: '15rem', marginLeft: '15rem' }}>
        What would life and nature would look like in other /
        <Span>Earth Like Planets?</Span>
      </Heading>

      <MidBox>
        <Image
          className="header-img"
          src="/assets/img/titanwater.png"
          alt="Saturn Moon Titan"
          width={600}
          height={600}
          // layout="fill"
          objectFit="cover"
          quality={100}
        />

        <TextBox>
          <p>
            Velit euismod nunc, neque, volutpat imperdiet adipiscing malesuada
            aliquam. Ut fames ultricies luctus ac. In leo luctus viverra
            malesuada. Sagittis vitae habitant nullam nisi at enim.
          </p>

          <p>Enter the journey where we will see what other planets hold.</p>
        </TextBox>
      </MidBox>

      <Heading css={{ fontSize: '4rem', margin: '15rem' }}>
        EXPLORING WHAT MIGHT BE HIDDEN AS A SECRET. EVEN FINDING OF A SINGLE
        BACKTERIA BEYOND EARTH WILL HELP ANSWER ONE OF HUMANITY BIGGEST QUESTION
      </Heading>

      <Heading css={{ fontSize: '4rem', marginLeft: '30rem' }}>
        and we are finally on the verge to get the answer, infact until now we
        have so many discoveries and eye on such planents that can help give us
        answer.
      </Heading>

      <NavBox>
        <Heading css={{ fontSize: '8rem', fontWeight: 'bold' }}>TITAN</Heading>
        <Heading css={{ fontSize: '8rem', fontWeight: 'bold' }}>
          KEPLER 62F
        </Heading>
        <Heading css={{ fontSize: '8rem', fontWeight: 'bold' }}>?</Heading>
      </NavBox>
    </Page>
  );
};

export default Home;

const Span = styled('span', {
  fontFamily: '$maghfirea',
  fontWeight: 'lighter',
  fontSize: '8rem',

  marginTop: '2rem',

  display: 'block',
});

const TextBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  flex: 1,
  padding: '8rem 0',

  fontFamily: '$modernist',
  fontSize: '2.2rem',
  color: '#383838',

  gap: '10rem',
});

const Text = styled('p', {
  fontFamily: '$modernist',
  fontSize: '1.8rem',

  color: '#383838',

  '&:hover': {
    cursor: 'pointer',
  },
});

const MidBox = styled('div', {
  maxWidth: '70%',
  margin: '10rem auto',

  display: 'flex',
  justifyContent: 'space-between',

  gap: '10rem',
});

const NavBox = styled('div', {
  maxWidth: '70%',
  margin: '50rem auto',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  textAlign: 'center',

  gap: '10rem',
});
