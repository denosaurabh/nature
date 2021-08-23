import { styled } from '@styled';
import Image from 'next/image';

import ContentBox from '@components/contentBox';
import Text from '@components/text';

const TitanLife: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default TitanLife;

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
