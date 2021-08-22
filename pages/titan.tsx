import Image from 'next/image';
import { useRouter } from 'next/router';

import { styled } from '@stitches/react';

import HorizontalPage from '@layouts/horizontalPage';

import Heading from '@components/heading';
import { AnimatedImageHorizontal } from '@components/image';

const Titan: React.FC = () => {
  const router = useRouter();

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
          <p>
            Titan is a very interesting moon to explore. The moon itself is
            named for the Titans of Greek mythology, which include Cronus
            (equated with the Roman god Saturn) and his 11 siblings. It is about
            9.54 AU far from sun, and only about 1% of heat compared to earth
            get received by Titan. Scientists believe that current conditions of
            Titan are very similar to those of early Earth, but at much lower
            temperature.
          </p>
          <br />
          <br />
          <p>Learn more about Titan &rarr;</p>
          <br />
        </Text>
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
              Titan is a rocky planet, so it is mostly composed of rocky
              material and ice. After some research it found out that there is a
              subsurface ocen of liquid water, mixed with ammonia and salts,
              where there is enough heat for the water to be liquid.
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
      </ContentBox>
      <ContentBox css={{ width: '50rem' }} flex flexColumn center>
        <Text>
          Titan has a very cold surface for life as we know it to survive. But,
          Titan is also very rich in organic compounds. Scientists believe
          microbial life could be present beneath the surface, where oceans of
          liquid water exists.
        </Text>

        <Text css={{ marginTop: '6rem' }}>
          Another research say that life could also exist on the lakes of liquid
          methane on Titan. Such organisms would inhale H<sub>2</sub> in place
          of O<sub>2</sub>, metabolize it with acetylene instead of glucose, and
          exhale methane instead of carbon dioxide.
        </Text>
      </ContentBox>
      <ContentBox css={{ width: '50rem' }} flex flexColumn center>
        <Text css={{ marginTop: '6rem' }}>
          Since then there has been experiments and research going on weather
          how such methanogenic life forms can exist in such exvironments and
          evidences that can prove their presence.
        </Text>

        <Text css={{ marginTop: '6rem' }}>
          All these are speculations & what research may says, but still Titan
          is a very interesting place to know more about life and how it could
          have started in our own planet in it&apos;s early days.
        </Text>
      </ContentBox>

      <ContentBox flex center>
        <SectionBox>
          <h2>MISSION TO TITAN</h2>
          <Image
            className="section-img"
            src="/assets/img/dragonfly.webp"
            alt="Saturn Moon Titan"
            width={800}
            height={500}
            objectFit="cover"
            quality={100}
          />
        </SectionBox>
      </ContentBox>

      <ContentBox css={{ width: '50rem' }} flex flexColumn center>
        <Text>
          In the past there has been a mission to study Saturn and it&apos;s
          moons called Cassini Huygens. This mission learned a lot about Saturn
          and it&apos;s moons and was the first to enter the orbit of Saturn.
          During it&apos;s mission, a probe was sent to the Titan in order to
          study the moon. This mission was first launched on October 15, 1997,
          made it&apos;s landing on Titan on January 15, 2005, and ended its
          journey on September 15, 2017.
        </Text>

        <Text css={{ marginTop: '6rem' }}>
          But that&apos;s not it. Nasa has planned a mission to Titan called
          &quot;Dragonfly&quot; in intention of studying it&apos;s prebiotic
          chemistry and extraterrestrial habitability. It is a robotic
          rotorcraft that will fly in the atmosphere of Titan doing it&apos;s
          research and exploring Titan. The mission is planned to launch on June
          2027, where it is expected to reach Saturn and land on Titan in 2036.
        </Text>
      </ContentBox>

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
        <Text
          as="a"
          href=" https://en.wikipedia.org/wiki/Cassini%E2%80%93Huygens"
          target="_blank"
        >
          https://en.wikipedia.org/wiki/Cassini%E2%80%93Huygens
        </Text>
      </ContentBox>

      <ContentBox>
        <NavBox>
          <Heading as="h3">
            CHOOSE NEXT <br /> DESTINATION
          </Heading>

          <PlanetBox>
            <span>&rarr;</span>
            <h3 onClick={() => router.push('/kepler')}>KEPLER 62F &#x2197;</h3>
            <p>A possible big earth and massive water world. </p>
          </PlanetBox>

          <PlanetBox>
            <span>&larr;</span>
            <h3 onClick={() => router.push('/')}>Home</h3>
          </PlanetBox>

          <PlanetBox>
            <span>|</span>
            <h3>Thanks for Watching</h3>
            <span>|</span>
          </PlanetBox>
        </NavBox>
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

  alignItems: 'center',
  justifyContent: 'flex-end',

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

const NavBox = styled('div', {
  width: '100%',
  margin: '5rem auto',

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
