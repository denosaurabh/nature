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

      <Heading
        css={{
          marginTop: '5%',
          marginLeft: '10%',
        }}
      >
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

          <p>Enter the journey where we will explore other distinct planets and moons that may be hiding extraterrestrial life.</p>
        </TextBox>
      </MidBox>

      <Heading css={{ fontSize: '4rem', margin: '8% 10%' }}>
        EXPLORING WHAT MIGHT BE HIDDEN AS A SECRET. EVEN FINDING OF A SINGLE
        BACKTERIA BEYOND EARTH WILL HELP ANSWER ONE OF HUMANITY BIGGEST QUESTION
      </Heading>

      <Heading css={{ fontSize: '4rem', marginLeft: '20%' }}>
        and we are finally on the verge to get the answer, infact until now we
        have so many discoveries and eye on such plaents that can help give us
        the answer.
      </Heading>

      <NavBox>
        <Heading as="h6">TITAN</Heading>
        <Heading as="h6">KEPLER 62F</Heading>
        <Heading as="h6">?</Heading>
      </NavBox>

      <Heading
        css={{
          fontFamily: '$modernist',
          fontSize: '3rem',
          margin: '10% 0 5rem 10%',
        }}
      >
        All graphics, design and development is done by{' '}
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
        CREDITS: 
        <br />
        <br />

        <div>
          <Image
            className="header-img"
            src="/assets/img/space-black.jpg"
            alt="Saturn Moon Titan"
            width={100}
            height={100}
            objectFit="cover"
            quality={100}
          />
          Photo by{' '}
          <a href="https://unsplash.com/@marjan_blan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Marjan Blan | @marjanblan
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </Heading>
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

  width: '50rem',

  padding: '8rem 0',

  fontFamily: '$modernist',
  fontSize: '2.2rem',
  color: '#383838',

  gap: '10rem',

  '@mobile': {
    width: '40rem',
  },
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
  width: '100%',

  padding: '10rem 5rem',

  display: 'flex',
  justifyContent: 'center',

  gap: '10rem',

  '@tablet': {
    flexDirection: 'column',
  },

  '@laptop': {
    gap: '5rem',
  },
});

const NavBox = styled('div', {
  maxWidth: '70%',
  margin: '50rem auto',

  display: 'flex',
  // flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  textAlign: 'center',

  gap: '10rem',

  h6: {
    fontSize: '6rem',
    minWidth: 'max-content',
  },
});
