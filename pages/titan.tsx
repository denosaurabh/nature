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

      <ContentBox css={{ padding: '4rem' }} flex alignBottom>
        <MainImage
          className="main-image"
          src="/assets/img/titanwater.png"
          alt="Saturn Moon Titan"
          width={700}
          height={500}
          objectFit="cover"
          quality={100}
        />
      </ContentBox>

      <ContentBox css={{ margin: 0, gap: '2rem' }} flex>
        <FullImage
          className="main-image"
          src="/assets/img/titanwater.png"
          alt="Saturn Moon Titan"
          width={1000}
          height={500}
          objectFit="cover"
          quality={100}
        />
        <FullImage
          className="main-image"
          src="/assets/img/titanwater.png"
          alt="Saturn Moon Titan"
          width={1000}
          height={500}
          objectFit="cover"
          quality={100}
        />
        <FullImage
          className="main-image"
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
  },
});

const MainImage = styled(Image, {
  marginTop: '5rem',
});

const FullImage = styled(Image, {
  height: '100%',
});
