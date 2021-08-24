import ContentBox from '@components/contentBox';
import { AnimatedImageHorizontal } from '@components/image';

const TitanGallery: React.FC = () => {
  return (
    <ContentBox css={{ margin: '0 20rem', gap: '2rem' }} flex>
      <AnimatedImageHorizontal
        className="img-titan-surface"
        src="/assets/img/titansurface.webp"
        alt="Saturn Moon Titan"
        width={1000}
        height={'100%'}
      />
      <AnimatedImageHorizontal
        className="img-titan-realistictitan"
        src="/assets/img/realistictitan.webp"
        alt="Saturn Moon Titan"
        width={1000}
        height={'100%'}
      />
      <AnimatedImageHorizontal
        className="img-titan-dragonfly"
        src="/assets/img/dragonfly.webp"
        alt="Saturn Moon Titan"
        width={1000}
        height={'100%'}
      />
    </ContentBox>
  );
};

export default TitanGallery;
