import Image from 'next/image';
import { styled } from '@styled';

import ContentBox from '@components/contentBox';
import Text from '@components/text';

const TitanMission: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default TitanMission;

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
