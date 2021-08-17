import Image from 'next/image';
import Link from 'next/link';

import { styled } from '@styled';

import Page from '@layouts/page';
import Header from '@components/header';
import Heading from '@components/heading';

import Ellipse from '@figures/ellipse.svg';
import IndexCircle from '@components/indexCircle';

const Home: React.FC = () => {
  return (
    <Page id="home">
      <Header>
        <Link href="/video" passHref>
          <Text css={{ ml: 'auto' }}>SEE VIDEO</Text>
        </Link>
      </Header>

      <EllipseStyled css={{ top: '8%', left: '25%' }} />
      <IndexCircle css={{ right: '-8%' }} />

      <Heading
        css={{
          marginTop: '5%',
          marginLeft: '10%',
        }}
      >
        Exploring Nature, Alien Life and Environment on /
        <Span>far moons & planets</Span>
      </Heading>

      <MidBox>
        <Image
          className="header-img"
          src="/assets/img/titanwater.png"
          alt="Saturn Moon Titan"
          width={600}
          height={600}
          objectFit="cover"
          quality={100}
        />

        <TextBox>
          <s style={{ textDecorationThickness: '2rem' }}>
            Velit euismod nunc, neque, volutpat imperdiet adipiscing malesuada
            aliquam. Ut fames ultricies luctus ac. In leo luctus viverra
            malesuada. Sagittis vitae habitant nullam nisi at enim.
          </s>
          <p>
            Journey to distant planets and moons where we will explore potential
            alien life, nature and hidden secrets.
          </p>
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
        <Heading as="h3">
          CHOOSE YOUR <br /> DESTINATION
        </Heading>

        <PlanetBox>
          <span>01.</span>
          <h3>Titan &#x2197;</h3>
          <p>
            A water world containing organic compounds and under surface liquid
            water oceans
          </p>
        </PlanetBox>
        <PlanetBox>
          <span>02.</span>
          <h3>Kepler 62F &#x2197;</h3>
          <p>A possible big earth and massive water world. </p>
        </PlanetBox>
        <PlanetBox>
          <span>03.</span>
          <h3>???</h3>
          <p>Coming Soon</p>
        </PlanetBox>
      </NavBox>

      {/* <Heading
        css={{ margin: '0 auto', textAlign: 'center', alignSelf: 'center' }}
      >
        SAYING THAT THERE ARE NO ALIENS IS LIKE TAKING A TEASPOON OF WATER OUT OF OCEAN AND SAYING FISH DONT EXIST
      </Heading> */}

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
