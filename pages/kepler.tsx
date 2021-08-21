import Image from 'next/image';

import { styled } from '@stitches/react';

import HorizontalPage from '@layouts/horizontalPage';

import Heading from '@components/heading';
import { AnimatedImageHorizontal } from '@components/image';

const Kepler: React.FC = () => {
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
    </HorizontalPage>
  );
};

export default Kepler;

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
