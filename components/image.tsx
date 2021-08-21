import { useEffect } from 'react';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
// import Image, { ImageProps } from 'next/image';
import { styled } from '@stitches/react';

interface ImageProps {
  className: string;
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
}

const AnimatedImageVertical: React.FC<ImageProps> = ({
  className,
  src,
  alt,
  width,
  height,
}) => {
  const imgY = useMotionValue(0);

  useEffect(() => {
    const onPageScroll = () => {
      imgY.set(window.scrollY);
    };

    window.addEventListener('scroll', onPageScroll);

    return () => {
      window.removeEventListener('scroll', onPageScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const imgYTransform = useTransform(imgY, [0, 1000], [-100, 100]);

  const springConfig = { damping: 100, stiffness: 1000 };
  const imgYSpring = useSpring(imgYTransform, springConfig);

  return (
    <Container css={{ width, height }}>
      <ImageStyled
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          translateY: imgYSpring,
        }}
      />
    </Container>
  );
};

const AnimatedImageHorizontal: React.FC<ImageProps> = ({
  className,
  src,
  alt,
  width,
  height,
}) => {
  const imgY = useMotionValue(0);

  useEffect(() => {
    const onPageScroll = () => {
      imgY.set(window.scrollY);
    };

    window.addEventListener('scroll', onPageScroll);

    return () => {
      window.removeEventListener('scroll', onPageScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const imgYTransform = useTransform(imgY, [0, 1000], [0.1, 1]);

  const springConfig = { damping: 100, stiffness: 1000 };
  const imgYSpring = useSpring(imgYTransform, springConfig);

  return (
    <Container css={{ width, height }}>
      <ImageStyled
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          scaleX: imgYSpring,
        }}
      />
    </Container>
  );
};

export { AnimatedImageVertical, AnimatedImageHorizontal };

const Container = styled(motion.div, {
  overflow: 'hidden',
});

const ImageStyled = styled(motion.img, {
  objectFit: 'cover',

  width: '100%',
});
