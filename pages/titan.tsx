import Image from 'next/image';

import { styled } from '@stitches/react';

import HorizontalPage from '@layouts/horizontalPage';

import Heading from '@components/heading';

const Titan: React.FC = () => {
  return (
    <HorizontalPage id="titan">
      <ContentBox>
        <Heading
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
