import Image from 'next/image';

import { styled } from '@stitches/react';

import HorizontalPage from '@layouts/horizontalPage';

import Heading from '@components/heading';

const Titan: React.FC = () => {
  return (
    <HorizontalPage id="titan">
      <ContentBox>
        <Heading
          as="h1"
          css={{
            fontSize: '12rem',
            marginTop: '25%',
            marginLeft: '20%',
          }}
          bigFirstLetter
        >
          TITAN
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
            It is near impossible for the life as we know it to exist on the
            surface of this moon due to it&apos;s extreme freezing temperatur,
            so cold that the lowest temp record in Antartica (-83deg C) is oven
            compared to average temp of -180 deg C on titan.
          </p>
          <br />
          <br />
          <p>Enter the journey where we will see what other planets hold.</p>
          <br />
        </Text>
      </ContentBox>

      <ContentBox css={{ width: '120rem' }} flex center>
        <Heading
          as="h3"
          css={{ width: '100%', maxWidth: 'unset', fontSize: '4rem' }}
        >
          Titan is the second largest moon in our solar system, making it
          slightly larger the planet Mercury, revolving around saturn
          <br />
          <br />
          But what surprise us more is it&apos;s favourable qualities for life
          and civilization, that no other planet exibit in our solar system.
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
            <h5>GEOGRAPHY</h5>
            <p>
              But, this doesn&apos;t mean that life can&apos;t be present there.
              Scientists has thinking that life can be present on the sub
              surface where temp are kind enough for life to emerge.
            </p>
          </FeatureBox>
          <FeatureBox>
            <h5>GEOGRAPHY</h5>
            <p>
              But, this doesn&apos;t mean that life can&apos;t be present there.
              Scientists has thinking that life can be present on the sub
              surface where temp are kind enough for life to emerge.
            </p>
          </FeatureBox>
          <FeatureBox>
            <h5>GEOGRAPHY</h5>
            <p>
              But, this doesn&apos;t mean that life can&apos;t be present there.
              Scientists has thinking that life can be present on the sub
              surface where temp are kind enough for life to emerge.
            </p>
          </FeatureBox>
        </FeatureContainer>
        <FeatureContainer>
          <FeatureBox>
            <h5>GEOGRAPHY</h5>
            <p>
              But, this doesn&apos;t mean that life can&apos;t be present there.
              Scientists has thinking that life can be present on the sub
              surface where temp are kind enough for life to emerge.
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
        <FullImage
          src="/assets/img/titanwater.png"
          alt="Saturn Moon Titan"
          width={1000}
          height={500}
          objectFit="cover"
          quality={100}
        />
        <FullImage
          src="/assets/img/titanwater.png"
          alt="Saturn Moon Titan"
          width={1000}
          height={500}
          objectFit="cover"
          quality={100}
        />
        <FullImage
          src="/assets/img/titanwater.png"
          alt="Saturn Moon Titan"
          width={1000}
          height={500}
          objectFit="cover"
          quality={100}
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

      <ContentBox css={{ width: '50rem', paddingTop: '10vh' }} flex flexColumn>
        <Text>
          But, this doesn&apos;t mean that life can&apos;t be present there.
          Scientists has thinking that life can be present on the sub surface
          where temp are kind enough for life to emerge. Another thing that
          makes Titan so special is it&apos;s atmosphere, no where in the Solar
          System other than Earth, Venus and Titan have their own atmosphere.
        </Text>

        <Text css={{ marginTop: '6rem' }}>
          But, this doesn&apos;t mean that life can&apos;t be present there.
          Scientists has thinking that life can be present on the sub surface
          where temp are kind enough for life to emerge. Another thing that
          makes Titan so special is it&apos;s atmosphere, no where in the Solar
          System other than Earth, Venus and Titan have their own atmosphere.
        </Text>
      </ContentBox>

      <ContentBox flex center>
        <SectionBox>
          <h2>ATMOSPHERE ON TITAN</h2>
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

const FullImage = styled(Image, {
  height: '100%',
});

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
  justifyContent: 'center',

  width: '100%',

  position: 'relative',

  h2: {
    fontFamily: '$neutral',
    color: '$cultured',
    fontSize: '5rem',
    fontWeight: '400',

    backgroundColor: '$davysGrey',

    filter: '',

    position: 'relative',
    left: '25%',

    zIndex: 100,
  },
});
