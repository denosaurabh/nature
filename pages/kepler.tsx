import HorizontalPage from '@layouts/horizontalPage';

import KeplerTitle from '@shared/kepler/title';
import KeplerDescription from '@shared/kepler/description';
import KeplerCredits from '@shared/kepler/credits';
import KeplerNavBox from '@shared/kepler/navBox';
import KeplerFeatures from '@shared/kepler/features';
import KeplerGallery from '@shared/kepler/gallery';
import KeplerHeading from '@shared/kepler/heading';
import KeplerLife from '@shared/kepler/life';
import KeplerEnd from '@shared/kepler/end';

const Kepler: React.FC = () => {
  return (
    <HorizontalPage id="titan">
      <KeplerTitle />
      <KeplerDescription />
      <KeplerGallery />
      <KeplerFeatures />
      <KeplerHeading />
      <KeplerLife />
      <KeplerEnd />
      <KeplerCredits />
      <KeplerNavBox />
    </HorizontalPage>
  );
};

export default Kepler;
