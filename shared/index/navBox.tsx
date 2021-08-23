import Heading from '@components/heading';
import { useRouter } from 'next/router';

import NavBox from '@components/navBox';
import PlanetBox from '@components/planetBox';

const IndexNavBar: React.FC = () => {
  const router = useRouter();

  return (
    <NavBox css={{ margin: '40rem auto', width: '88%' }}>
      <Heading as="h3">
        CHOOSE YOUR <br /> DESTINATION
      </Heading>

      <PlanetBox>
        <span>01.</span>
        <h3 onClick={() => router.push('/titan')}>Titan &#x2197;</h3>
        <p>
          A world containing organic compounds and subsurface liquid water
          oceans
        </p>
      </PlanetBox>
      <PlanetBox>
        <span>02.</span>
        <h3 onClick={() => router.push('/kepler')}>Kepler 62F &#x2197;</h3>
        <p>A possible big earth and massive water world. </p>
      </PlanetBox>
      <PlanetBox>
        <span>03.</span>
        <h3 onClick={() => router.push('/')}>???</h3>
        <p>Coming Soon</p>
      </PlanetBox>
    </NavBox>
  );
};

export default IndexNavBar;
