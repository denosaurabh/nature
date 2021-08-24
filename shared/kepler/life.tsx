import Image from 'next/image';

import ContentBox from '@components/contentBox';
import Text from '@components/text';
import SectionBox from '@components/sectionBox';

const KeplerLife: React.FC = () => {
  return (
    <>
      <ContentBox flex center>
        <SectionBox>
          <h2>LIFE ON KEPLER 62F</h2>
          <Image
            className="kepler-life-section-img"
            src="/assets/img/kepler-artistic.webp"
            alt="Kepler 62F Artistic"
            width={800}
            height={500}
            objectFit="cover"
            quality={100}
          />
        </SectionBox>
      </ContentBox>
      <ContentBox css={{ width: '50rem' }} flex flexColumn center>
        <Text>
          Some studies and research have found out that Kepler 62F have a
          atmopshere as same as our Earth upto 2500 times Earth’s level. It is also likely to have CO<sub>2</sub> much more higher than Earth. 

          
        </Text>

        <Text
          css={{
            marginTop: '6rem',
            textDecoration: 'line-through',
            textDecorationThickness: '12px',
          }}
        >
          -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Text>
      </ContentBox>
    </>
  );
};

export default KeplerLife;
