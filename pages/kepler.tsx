import { useRouter } from 'next/router';

import HorizontalPage from '@layouts/horizontalPage';

import Heading from '@components/heading';
import ContentBox from '@components/contentBox';
import Text from '@components/text';
import PlanetBox from '@components/planetBox';
import NavBox from '@components/navBox';

const Kepler: React.FC = () => {
  const router = useRouter();

  return (
    <HorizontalPage id="titan">
      <ContentBox flex alignBottom>
        <Heading
          as="h1"
          css={{
            width: '250rem',
            maxWidth: 'unset',
            fontSize: '32rem',
            marginTop: '10%',
            marginLeft: '20%',
          }}
        >
          KEPLER-62F
        </Heading>
      </ContentBox>

      <ContentBox
        flex
        alignBottom
        css={{ padding: '10% 0 6% 0', width: '50rem' }}
      >
        <Text>
          Kepler-62f also known as Super Earth, is a exoplanet oribiting the
          star Kepler 62, which is about 990 light years away from Earth in the
          constellation of Lyra. It was first discovered by NASA&apos;s Kepler
          Spacecraft.
        </Text>
      </ContentBox>

      <ContentBox
        flex
        flexColumn
        css={{
          padding: '10vh 10rem',
          gap: '2rem',
          borderLeft: '1px solid #999999',
          borderRight: '1px solid #999999',
        }}
      >
        <Heading>Credits</Heading>
        <Text
          as="a"
          href="https://en.wikipedia.org/wiki/Kepler-62f"
          target="_blank"
        >
          https://en.wikipedia.org/wiki/Kepler-62f
        </Text>
      </ContentBox>

      <ContentBox>
        <NavBox>
          <Heading as="h3">
            CHOOSE NEXT <br /> DESTINATION
          </Heading>

          <PlanetBox>
            <span>&rarr;</span>
            <h3 onClick={() => router.push('/titan')}>TITAN &#x2197;</h3>
            <p>
              A world containing organic compounds and subsurface liquid water
              oceans
            </p>
          </PlanetBox>

          <PlanetBox>
            <span>&larr;</span>
            <h3 onClick={() => router.push('/')}>Home</h3>
          </PlanetBox>

          <PlanetBox>
            <span>|</span>
            <h3>Thanks for Watching</h3>
            <span>|</span>
          </PlanetBox>
        </NavBox>
      </ContentBox>
    </HorizontalPage>
  );
};

export default Kepler;
