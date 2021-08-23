import { useRouter } from 'next/router';

import ContentBox from '@components/contentBox';
import Heading from '@components/heading';
import NavBox from '@components/navBox';
import PlanetBox from '@components/planetBox';

const TitanNavbox: React.FC = () => {
  const router = useRouter();

  return (
    <ContentBox>
      <NavBox>
        <Heading as="h3">
          CHOOSE NEXT <br /> DESTINATION
        </Heading>

        <PlanetBox>
          <span>&rarr;</span>
          <h3 onClick={() => router.push('/kepler')}>KEPLER 62F &#x2197;</h3>
          <p>A possible big earth and massive water world. </p>
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
  );
};

export default TitanNavbox;
