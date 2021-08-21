import Image from 'next/image';

import { styled } from '@stitches/react';

import HorizontalPage from '@layouts/horizontalPage';

import Heading from '@components/heading';
import { AnimatedImageHorizontal } from '@components/image';

const Titan: React.FC = () => {
  return (
    <HorizontalPage id="titan">
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

      <ContentBox
        css={{ padding: '4rem', gap: '4rem', marginRight: '20rem' }}
        flex
        alignBottom
      >
        <MainImage
          className="main-image"
          src="/assets/img/titanwater.png"
          alt="Saturn Moon Titan"
          width={700}
          height={500}
          objectFit="cover"
          quality={100}
        />
        <Text css={{ width: '40rem' }}>
          <p>Titan is a very interesting moon to explore.</p>
          <br />
          <br />
          <p>Learn more about Titan &rarr;</p>
          <br />
        </Text>
      </ContentBox>

      <ContentBox css={{ width: '120rem' }} flex center>
        <Heading
          as="h3"
          css={{ width: '100%', maxWidth: 'unset', fontSize: '4rem' }}
        >
          Titan is the only moon in the Solar System to have a dense atmosphere
          and only moon known to have stable bodies of liquids on it&apos;s
          surface and subsurface.
          <br />
          <br />
          But what surprise us more is it&apos;s rare qualities for supporting
          life as we know it, that no other planet exhibit in our solar system.
        </Heading>
      </ContentBox>

      <ContentBox
        flex
        flexColumn
        justifyBottom
        css={{ marginBottom: '2vh', padding: '6vh 0' }}
      >
        <FeatureContainer>
          <FeatureBox>
            <h5>ATMOSPHERE</h5>
            <p>
              Titan is the only moon in the Solar System with a atmosphere, The
              atmospheric pressure Titan is about 60% more than of earth. It is
              primarly composed of Nigrogen (94%), Methane (5%) and Hydrogon
              (0.09%).
            </p>
          </FeatureBox>
          <FeatureBox>
            <h5>SIZE AND TEMPERATURE</h5>
            <p>
              Titan total diameter is about 5,150km, about the same as of Mars.
              Titan is a cold place, with a average temperature of -180°C.
              celsius, compared to coldest temp ever recorded on earth which is
              -89.2°C.
            </p>
          </FeatureBox>
          <FeatureBox>
            <h5>GEOGRAPHY</h5>
            <p>
              Similar to earth, Titan as has a complex weather cycle which rains
              methane instead of water. There are found to be clouds, rivers,
              lakes, cliffs and seas of hydrocarbons like methane and ethane.
            </p>
          </FeatureBox>
        </FeatureContainer>
        <FeatureContainer>
          <FeatureBox>
            <h5>LIQUID WATER</h5>
            <p>
              Titan is a rocky planet, containing water-bearing silicate rock at
              {/* it&apos;s center. Surrounded by a water ice layer. Well it is too
              cold for the water to stay liquid at the surface. So,  */}
              After some research it found out that there is a subsurface ocen
              of liquid water, mixed with ammonia and salts, where there is
              enough heat for the water to be liquid.
            </p>
          </FeatureBox>
        </FeatureContainer>
        <FeatureContainer css={{ marginTop: 'auto' }}>
          <FeatureBox
            css={{
              width: '100%',
              height: '30vh',
              marginBottom: 'auto',
              padding: 0,
            }}
          >
            <Image
              src="/assets/img/titanwater.png"
              alt="Saturn Moon Titan"
              width={1000}
              height={350}
              objectFit="cover"
              quality={100}
            />
          </FeatureBox>
        </FeatureContainer>
      </ContentBox>

      <ContentBox css={{ margin: '0 20rem', gap: '2rem' }} flex>
        <AnimatedImageHorizontal
          className="img-titan-surface"
          src="/assets/img/titansurface.png"
          alt="Saturn Moon Titan"
          width={1000}
          height={'100%'}
        />
        <AnimatedImageHorizontal
          className="img-titan-realistictitan"
          src="/assets/img/realistictitan.png"
          alt="Saturn Moon Titan"
          width={1000}
          height={'100%'}
        />
        <AnimatedImageHorizontal
          className="img-titan-dragonfly"
          src="/assets/img/dragonfly.webp"
          alt="Saturn Moon Titan"
          width={1000}
          height={'100%'}
        />
      </ContentBox>

      <ContentBox center>
        <InfoBox>
          <h4>
            But these opposite qualities does not make Titan any less good place
            for making a civilization
          </h4>
          <p>Titan is full of opportunities</p>
        </InfoBox>
      </ContentBox>

      <ContentBox flex center>
        <SectionBox>
          <h2>LIFE ON TITAN</h2>
          <Image
            className="section-img"
            src="/assets/img/titanwater.png"
            alt="Saturn Moon Titan"
            width={800}
            height={500}
            objectFit="cover"
            quality={100}
          />
        </SectionBox>

        <ContentBox css={{ width: '70rem' }} flex flexColumn>
          <Text>
            But, this doesn&apos;t mean that life can&apos;t be present there.
            Scientists has thinking that life can be present on the sub surface
            where temp are kind enough for life to emerge. Another thing that
            makes Titan so special is it&apos;s atmosphere, no where in the
            Solar System other than Earth, Venus and Titan have their own
            atmosphere.
          </Text>

          <Text css={{ marginTop: '6rem' }}>
            But, this doesn&apos;t mean that life can&apos;t be present there.
            Scientists has thinking that life can be present on the sub surface
            where temp are kind enough for life to emerge.
          </Text>
        </ContentBox>
      </ContentBox>
      <ContentBox flex flexColumn css={{ margin: '10vh 10rem', gap: '2rem' }}>
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
      </ContentBox>
    </HorizontalPage>
  );
};

export default Titan;

/*

It is near impossible for the life as we know it to exist on the surface of the planet due to it's extreme freezing temperature, soo cold that the lowest temp record in Antartica (-83deg C) is oven compared to average temp of -180 deg C on titan. 

But, this doesn't mean that life can't be present there. Scientists has thinking that life can be present on the sub surface where temp are kind enough for life to emerge.

Another thing that makes Titan so special is it's atmosphere, no where in the Solar System other than Earth, Venus and Titan have their own atmosphere. 

*/

const ContentBox = styled('div', {
  width: 'fit-content',
  margin: '0 5rem',

  variants: {
    flex: {
      true: {
        display: 'flex',
      },
    },
    flexColumn: {
      true: {
        flexDirection: 'column',
      },
    },

    alignBottom: {
      true: {
        alignItems: 'flex-end',
      },
    },

    justifyBottom: {
      true: {
        justifyContent: 'flex-end',
      },
    },

    center: {
      true: {
        display: 'flex',

        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
});

const MainImage = styled(Image, {
  marginTop: '5rem',
});

const Text = styled('div', {
  fontFamily: '$modernist',
  fontSize: '1.8rem',
  color: '#383838',
});

// const FullImage = styled(Image, {
//   height: '100%',
// });

const FeatureContainer = styled('div', {
  display: 'flex',
  gap: '8rem',
});

const FeatureBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  width: '40rem',
  gap: '2rem',

  margin: '4rem',

  fontFamily: '$modernist',
  fontSize: '1.6rem',
  color: '#383838',

  h5: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },

  p: {
    fontSize: '1.6rem',
    lineHeight: '140%',
  },
});

const InfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  width: '60rem',
  gap: '4rem',

  h4: {
    fontFamily: '$neutral',
    color: '#383838',
    fontSize: '3.2rem',
    fontWeight: '400',
  },

  p: {
    fontFamily: '$modernist',
    fontSize: '1.8rem',
    lineHeight: '140%',
  },
});

const SectionBox = styled('div', {
  display: 'flex',
  // flexDirection: 'column',

  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  position: 'relative',

  h2: {
    fontFamily: '$neutral',
    color: '$davysGrey',
    fontSize: '5rem',
    fontWeight: '400',

    padding: '1rem',

    backgroundColor: '$lightGray',

    position: 'relative',
    left: '25%',

    zIndex: 100,
  },
});
