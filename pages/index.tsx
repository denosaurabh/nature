import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { styled } from '@styled';

import Page from '@layouts/page';

import Header from '@components/header';
import Heading from '@components/heading';
import IndexCircle from '@components/indexCircle';
import { AnimatedImageVertical } from '@components/image';

import Ellipse from '@figures/ellipse.svg';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const router = useRouter();

  const [allQuotes, setAllQuotes] = useState({
    quotes: [
      {
        text: `I'm sure the universe is full of intelligent life. It's just been too
    intelligent to come here.`,
        by: 'Carl Sagan',
      },
      {
        text: `Two possibilities exist: Either we are alone in the Universe or we are not.
        Both are equally terrifying.`,
        by: 'Arthur C. Clarke',
      },
      {
        text: `If it is just us, seems like an awful waste of space.`,
        by: 'Carl Sagan',
      },
      {
        text: `In the deepest sense the search for extraterrestrial intelligence is a search for ourselves.`,
        by: 'Carl Sagan',
      },
    ],
    currentQuote: 0,
  });

  // useEffect(() => {
  //   const interval = setInterval(() => {}, 3000);

  //   return () => clearInterval(interval);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [allQuotes]);

  const onQuoteAnimationUpdate = (latest) => {
    if (latest.opacity === 0) {
      let nextQuoteNo = allQuotes.currentQuote + 1;

      if (nextQuoteNo === allQuotes.quotes.length) {
        nextQuoteNo = 0;
      }

      setAllQuotes({ ...allQuotes, currentQuote: nextQuoteNo });
    }
  };

  return (
    <Page id="home">
      <Header />

      <EllipseStyled css={{ top: '8%', left: '25%' }} />
      <IndexCircle css={{ right: '-8%' }} />

      <Heading
        css={{
          marginTop: '5%',
          marginLeft: '10%',
        }}
      >
        Explore Nature, Alien Life and Environment on /
        <Span>far moons & planets</Span>
      </Heading>

      <MidBox>
        <AnimatedImageVertical
          className="header-img"
          src="/assets/img/titanwater.png"
          alt="Saturn Moon Titan"
          width={600}
          height={600}
        />

        <TextBox>
          <s style={{ textDecorationThickness: '2rem' }}>
            Velit euismod nunc, neque, volutpat imperdiet adipiscing malesuada
            aliquam. Ut fames ultricies luctus ac. In leo luctus viverra
            malesuada. Sagittis vitae habitant nullam nisi at enim.
          </s>
          <p>
            Journey to distant planets and moons where we will explore how
            potential alien life may look like, nature and their hidden secrets.
          </p>
        </TextBox>
      </MidBox>

      <Heading css={{ fontSize: '4rem', margin: '8% 10%' }}>
        We always have been asking us what life and nature may would look like
        in planets other than earth, that might exhibit life as ours. But, since
        we haven&apos;t really something like us.
        {/* In this
        journey we will explore far moons and planets in search of life, */}
        {/* EXPLORING WHAT MIGHT BE HIDDEN AS A SECRET. EVEN FINDING OF A SINGLE
        BACKTERIA BEYOND EARTH WILL HELP ANSWER ONE OF HUMANITY BIGGEST QUESTION */}
        {/* <Text css={{ fontSize: '3rem' }}> &quot;Are we alone&quot;</Text> */}
      </Heading>

      <Heading css={{ fontSize: '4rem', marginLeft: '20%' }}>
        In this exploration
      </Heading>

      <NavBox>
        <Heading as="h3">
          CHOOSE YOUR <br /> DESTINATION
        </Heading>

        <PlanetBox>
          <span>01.</span>
          <h3 onClick={() => router.push('/titan')}>Titan &#x2197;</h3>
          <p>
            A water world containing organic compounds and under surface liquid
            water oceans
          </p>
        </PlanetBox>
        <PlanetBox>
          <span>02.</span>
          <h3 onClick={() => router.push('/kepler')}>Kepler 62F &#x2197;</h3>
          <p>A possible big earth and massive water world. </p>
        </PlanetBox>
        <PlanetBox>
          <span>03.</span>
          <h3 onClick={() => router.push('/')}>???</h3>
          <p>Coming Soon</p>
        </PlanetBox>
      </NavBox>

      <Quote
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          ease: 'anticipate',
          repeat: Infinity,
          repeatDelay: 2,
          repeatType: 'reverse',
          // transitionEnd: { opacity: 0 },
        }}
        onUpdate={onQuoteAnimationUpdate}
      >
        &quot;{allQuotes.quotes[allQuotes.currentQuote].text}&quot;
        <Text css={{ textAlign: 'right', marginTop: '4rem', fontSize: '2rem' }}>
          ― {allQuotes.quotes[allQuotes.currentQuote].by}
        </Text>
      </Quote>

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
  width: '95%',
  margin: '40rem auto',

  display: 'flex',
  flexDirection: 'column',

  gap: '10rem',

  h3: {
    fontSize: '6rem',
    minWidth: 'max-content',
  },

  h6: {
    fontSize: '6rem',
    minWidth: 'max-content',
  },
});

const PlanetBox = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',

  '@mobile': {
    flexWrap: 'wrap',
  },

  span: {
    fontFamily: '$maghfirea',
    fontSize: '14rem',

    color: '$quickSilver',

    marginRight: '4rem',

    '@tablet': {
      fontSize: '8rem',
      marginRight: '2rem',
    },
  },

  h3: {
    flex: 1,

    fontFamily: '$neutral',
    fontSize: '6.4rem',
    fontWeight: 'lighter',
    color: '#232323',

    marginRight: '4rem',

    '@tablet': {
      fontSize: '4.8rem',
      marginRight: '2rem',
    },

    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },

  p: {
    fontFamily: '$modernist',
    fontSize: '1.8rem',
    color: '$grayWeb',

    textAlign: 'right',

    width: '30rem',
    minWidth: '20rem',

    '@mobile': {
      flex: 1,
    },
  },
});

const EllipseStyled = styled(Ellipse, {
  position: 'absolute',
  zIndex: -10,
});

const Quote = styled(motion.h6, {
  margin: '0 auto',
  width: '80%',

  textAlign: 'center',
  alignSelf: 'center',

  fontFamily: '$modernist',
  fontWeight: 'lighter',
  fontSize: '4rem',
});
