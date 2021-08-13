import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { styled } from '@styled';

import Page from '@layouts/page';
import Header from '@components/header';
import { motion } from 'framer-motion';

const Video: React.FC = () => {
  const [videoPlay, setVideoPlay] = useState(true);
  const router = useRouter();

  const videoRef = useRef<HTMLVideoElement>();

  const handleCanPlay = () => {
    console.log('now video can play...');
  };

  const handleDurationChange = (e) => {
    console.log('video duration changed to ', e.target.duration);
  };

  const handlePlay = () => {
    console.log('video is playing...');
  };

  const handlePause = () => {
    console.log('video is paused!');
  };

  const handleWaiting = () => {
    console.log('video is waiting...');
  };

  const handleEnded = () => {
    console.log('video ended!');
  };

  const handleOnClick = (e) => {
    // To stop video to pause when clicked
    e.preventDefault();
  };

  /* CONTROLS */
  const onPausePlayClick = () => {
    setVideoPlay(!videoPlay);
  };

  const onSkipClick = () => {
    router.push('/');
  };

  useEffect(() => {
    if (!videoRef.current) return;

    console.log(videoRef.current);
  }, [videoRef]);

  useEffect(() => {
    if (!videoRef.current) return;

    if (videoPlay) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }, [videoRef, videoPlay]);

  return (
    <Page id="video">
      <Header>
        <ControlBox>
          <Text onClick={onPausePlayClick}>{videoPlay ? 'pause' : 'play'}</Text>
        </ControlBox>

        <Text onClick={onSkipClick}>SKIP</Text>
      </Header>

      <IntroVideo
        ref={videoRef}
        autoPlay
        onClick={handleOnClick}
        onCanPlay={handleCanPlay}
        onDurationChange={handleDurationChange}
        onPlay={handlePlay}
        onPause={handlePause}
        onWaiting={handleWaiting}
        onEnded={handleEnded}
        exit={{
          width: '600px',
          height: '600px',

          position: 'absolute',
          top: '60%',
          left: '15%',

          // opacity: 0,

          transition: {
            transition: { ease: 'anticipate', duration: 1.2 },
          },
        }}
        poster="/assets/img/titanwater.png"
      >
        <source src="/assets/videos/space-test-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </IntroVideo>
    </Page>
  );
};

const IntroVideo = styled(motion.video, {
  width: '100%',
  height: '100%',

  objectFit: 'cover',
});

const ControlBox = styled('div', {
  ml: 'auto',

  display: 'flex',
  gap: '3rem',

  alignItems: 'center',
});

const Text = styled('p', {
  fontFamily: '$modernist',
  fontSize: '1.8rem',

  color: '#383838',

  '&:hover': {
    cursor: 'pointer',
  },
});

export default Video;
