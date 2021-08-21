import { styled } from '@stitches/react';

import HorizontalPage from '@layouts/horizontalPage';

import Heading from '@components/heading';

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
