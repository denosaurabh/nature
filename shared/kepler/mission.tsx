import Image from 'next/image';

import ContentBox from '@components/contentBox';
import Text from '@components/text';
import SectionBox from '@components/sectionBox';

const KeplerMission: React.FC = () => {
  return (
    <>
      <ContentBox flex center>
        <SectionBox>
          <h2>MISSION TO KEPLER 62F</h2>
          <Image
            className="section-rocket-img"
            src="/assets/img/rocket.webp"
            alt="Saturn Moon Titan"
            width={800}
            height={500}
            objectFit="cover"
            quality={100}
          />
          <Text>
            Photo by{' '}
            <a href="https://unsplash.com/@spacex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              SpaceX
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/s/photos/rocket?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </Text>
        </SectionBox>
      </ContentBox>

      <ContentBox css={{ width: '50rem' }} flex flexColumn center>
        <Text>Future Mission:</Text>
        <Text
          css={{
            textDecoration: 'line-through',
            textDecorationThickness: '15px',
          }}
        >
          -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Text>
      </ContentBox>
    </>
  );
};

export default KeplerMission;
