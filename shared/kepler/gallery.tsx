import ContentBox from '@components/contentBox';
import { AnimatedImageHorizontal } from '@components/image';

import { styled } from '@styled';

const KeplerGallery: React.FC = () => {
  return (
    <ContentBox flex css={{ margin: '0 20rem', gap: '2rem' }}>
      <ImageBox>
        <p>
          Photo By
          <a href="https://unsplash.com/@alex_andrews?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Alexander Andrews
          </a>
          on
          <a href="https://unsplash.com/s/photos/planet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
        <AnimatedImageHorizontal
          className="kepler-image"
          src="/assets/img/kepler.webp"
          alt="Kepler 62F"
          width={1000}
          height={'100%'}
        />
      </ImageBox>
      <ImageBox>
        <p>
          Image taken from
          <a href="https://exoplanets.nasa.gov/resources/122/kepler-62f-a-small-habitable-zone-world-artist-concept/">
            https://exoplanets.nasa.gov/resources/122/kepler-62f-a-small-habitable-zone-world-artist-concept
          </a>
        </p>
        <AnimatedImageHorizontal
          className="kepler-artictic-image"
          src="/assets/img/kepler-artistic.webp"
          alt="Kepler 62F Artitic"
          width={1000}
          height={'100%'}
        />
      </ImageBox>
    </ContentBox>
  );
};

export default KeplerGallery;

const ImageBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  p: {
    fontFamily: '$modernist',
    fontSize: '2.2rem',

    margin: '2rem 0',

    a: {
      padding: '0 1rem',
    },
  },
});
