import Image from 'next/image';

import ContentBox from '@components/contentBox';
import Text from '@components/text';
import SectionBox from '@components/sectionBox';

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
          In the past, there has been a mission to study Saturn and its moons
          called Cassini Huygens. This mission learned a lot about Saturn and
          its moons and was the first to enter the orbit of Saturn. During its
          mission, a probe was sent to the Titan to study the moon. This mission
          was first launched on October 15, 1997, made its landing on Titan on
          January 15, 2005, and ended its journey on September 15, 2017.
        </Text>

        <Text css={{ marginTop: '6rem' }}>
          But that&apos;s not it. Nasa has planned a mission to Titan called
          &quot;Dragonfly&quot; with intention of studying its prebiotic
          chemistry and extraterrestrial habitability. It is a robotic
          rotorcraft that will fly in the atmosphere of Titan doing its research
          and exploring Titan. The mission is planned to launch on June 2027,
          where it is expected to reach Saturn and land on Titan in 2036.
        </Text>
      </ContentBox>
    </>
  );
};

export default TitanMission;
