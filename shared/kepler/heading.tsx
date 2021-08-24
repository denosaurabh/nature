import ContentBox from '@components/contentBox';
import Heading from '@components/heading';

const KeplerHeading: React.FC = () => {
  return (
    <ContentBox flex center>
      <Heading css={{ maxWidth: 'unset', width: '150rem', fontSize: '4rem' }}>
        Kepler-62f and the other Kepler-62 exoplanets are being specially
        targeted as part of the Search for Extraterrestrial Intelligence (SETI)
        search programs. They will scan the areas for any signals that may
        represent technological life in the system.
      </Heading>
    </ContentBox>
  );
};

export default KeplerHeading;
