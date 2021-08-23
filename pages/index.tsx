import { styled } from '@styled';

import Page from '@layouts/page';

import Header from '@components/header';
import IndexCircle from '@components/indexCircle';

import Ellipse from '@figures/ellipse.svg';

import IndexHeading from '@shared/index/heading';
import IndexMidBox from '@shared/index/midBox';
import IndexDescription from '@shared/index/description';
import IndexQuotes from '@shared/index/quotes';
import IndexFooter from '@shared/index/footer';
import IndexNavBar from '@shared/index/navBox';

const Home: React.FC = () => {
  return (
    <Page id="home">
      <Header />

      <EllipseStyled css={{ top: '6%', left: '25%' }} />
      <IndexCircle css={{ right: '-8%' }} />

      <IndexHeading />
      <IndexMidBox />
      <IndexDescription />
      <IndexNavBar />
      <IndexQuotes />
      <IndexFooter />
    </Page>
  );
};

export default Home;

const EllipseStyled = styled(Ellipse, {
  position: 'absolute',
  zIndex: -10,
});
