import ContentBox from '@components/contentBox';
import { FeatureBox, FeatureContainer } from '@components/featureBox';

const KeplerFeatures: React.FC = () => {
  return (
    <ContentBox
      flex
      flexColumn
      css={{ marginRight: '30rem', marginBottom: '2vh', padding: '6vh 0' }}
    >
      <FeatureContainer css={{ flexDirection: 'column' }}>
        <FeatureBox>
          <h5>MASS, RADIUS AND TEMPERATURE</h5>
          <p>
            Kepler 62F is around 2.8 times bigger with a radius of over 1.4
            times than our Earth. It has an equilibrium temperature of about
            208K (−65 °C; −85 °F).
          </p>
        </FeatureBox>
        <FeatureBox>
          <h5>CLIMATE</h5>
          <p>
            Kepler 62F is expected to be a water ocean-covered planet with
            possessing rocks. It also seems to have enough CO<sub>2</sub>,
            otherwise, it may be entirely covered with ice. Furthur search and
            studies suggest that it also exhibit an atmosphere that ranges in
            thickness from the same as Earth&apos;s up to 12 times thicker than
            our planet&apos;s, and there may have had seasons and a climate
            similar to those on Earth.
          </p>
        </FeatureBox>
        <FeatureBox
          css={{
            p: {
              textDecoration: 'line-through',
              textDecorationThickness: '15px',
            },
          }}
        >
          <h5>HABITABILITY</h5>
          <p>
            Titan is the only moon in the Solar System with a atmosphere, The
            atmospheric pressure Titan is about 60% more than of earth. It is
            primarly composed of Nigrogen (94%), Methane (5%) and Hydrogon
            (0.09%).
          </p>
        </FeatureBox>
      </FeatureContainer>
    </ContentBox>
  );
};

export default KeplerFeatures;
