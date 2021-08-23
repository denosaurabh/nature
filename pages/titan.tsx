import HorizontalPage from '@layouts/horizontalPage';

import TitanTitle from '@shared/titan/title';
import Description from '@shared/titan/description';
import Features from '@shared/titan/features';
import TitanGallery from '@shared/titan/gallery';
import TitanCredits from '@shared/titan/credits';
import TitanInfo from '@shared/titan/info';
import TitanLife from '@shared/titan/life';
import TitanMission from '@shared/titan/mission';
import TitanNavbox from '@shared/titan/navbox';

const Titan: React.FC = () => {
  return (
    <HorizontalPage id="titan">
      <TitanTitle />
      <Description />
      <Features />
      <TitanGallery />
      <TitanInfo />
      <TitanLife />
      <TitanMission />
      <TitanCredits />
      <TitanNavbox />
    </HorizontalPage>
  );
};

export default Titan;
