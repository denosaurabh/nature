import ContentBox from '@components/contentBox';
import { FeatureBox, FeatureContainer } from '@components/featureBox';
import Image from 'next/image';

const TitanFeatures: React.FC = () => {
  return (
    <ContentBox
      flex
      flexColumn
      justifyBottom
      css={{ marginBottom: '2vh', padding: '6vh 0' }}
    >
      <FeatureContainer>
        <FeatureBox>
          <h5>ATMOSPHERE</h5>
          <p>
            Titan is the only moon in the Solar System with an atmosphere, The
            atmospheric pressure Titan is about 60% more than of earth. It is
            primarily composed of Nitrogen (94%), Methane (5%), and Hydrogen
            (0.09%).
          </p>
        </FeatureBox>
        <FeatureBox>
          <h5>SIZE AND TEMPERATURE</h5>
          <p>
            Titan&apos;s total diameter is about 5,150km, about the same as
            Mars. Titan is a cold place, with an average temperature of -180°C.
            celsius, compared to the coldest temp ever recorded on earth which
            is -89.2°C.
          </p>
        </FeatureBox>
        <FeatureBox>
          <h5>GEOGRAPHY</h5>
          <p>
            Similar to earth, Titan has a complex weather cycle that rains
            methane instead of water. There are found to be clouds, rivers,
            lakes, cliffs, and seas of hydrocarbons like methane and ethane.
          </p>
        </FeatureBox>
      </FeatureContainer>
      <FeatureContainer>
        <FeatureBox>
          <h5>LIQUID WATER</h5>
          <p>
            Titan is a rocky planet, so it is mostly composed of rocky material
            and ice. After some research, it is found out that there is a
            subsurface ocean of liquid water, mixed with ammonia and salts,
            where there is enough heat for the water to be liquid.
          </p>
        </FeatureBox>
      </FeatureContainer>
      <FeatureContainer css={{ marginTop: 'auto' }}>
        <FeatureBox
          css={{
            width: '100%',
            height: '30vh',
            marginBottom: 'auto',
            padding: 0,
          }}
        >
          <Image
            src="/assets/img/titanwater.webp"
            alt="Saturn Moon Titan"
            width={1000}
            height={350}
            objectFit="cover"
            quality={100}
          />
        </FeatureBox>
      </FeatureContainer>
    </ContentBox>
  );
};

export default TitanFeatures;
