import HorizontalPage from '@layouts/horizontalPage';

import KeplerTitle from '@shared/kepler/title';
import KeplerDescription from '@shared/kepler/description';
import KeplerCredits from '@shared/kepler/credits';
import KeplerNavBox from '@shared/kepler/navBox';

const Kepler: React.FC = () => {
  return (
    <HorizontalPage id="titan">
      <KeplerTitle />
      <KeplerDescription />
      <KeplerCredits />
      <KeplerNavBox />
    </HorizontalPage>
  );
};

export default Kepler;
