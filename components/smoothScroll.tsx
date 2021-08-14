import React, { useRef, useState, useCallback, useEffect } from 'react';

import ResizeObserver from 'resize-observer-polyfill';
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from 'framer-motion';
import { styled } from '@styled';

const SmoothScrollVertical: React.FC = ({ children }) => {
  const [contentHeight, setContentHeight] = useState(0);
  const scrollRef = useRef<HTMLElement>();

  const resizePageHeight = useCallback((entries) => {
    for (const entry of entries) {
      setContentHeight(entry.contentRect.height);
    }
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;

    setContentHeight(window.innerHeight);

    const resizeObserver = new ResizeObserver((entries: unknown) => {
      resizePageHeight(entries);
    });

    scrollRef && resizeObserver.observe(scrollRef.current);

    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useViewportScroll();

  const transform = useTransform(
    scrollY,
    [0, contentHeight],
    [0, -contentHeight]
  );
  const physics = { damping: 15, mass: 0.2, stiffness: 90 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <VerticalScrollContainer ref={scrollRef} style={{ y: spring }}>
        {children}
      </VerticalScrollContainer>
      <div style={{ height: contentHeight }} />
    </>
  );
};

const SmoothScrollHorizontal: React.FC = ({ children }) => {
  const scrollRef = useRef(null);
  const contentRef = useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pageWidth, setPageWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  const onResize = useCallback((entries) => {
    for (const entry of entries) {
      setPageWidth(entry.contentRect.width);
    }
  }, []);

  useEffect(() => {
    if (!scrollRef) return;

    setContentWidth(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(contentRef.current);

    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useViewportScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -contentWidth] //-contentWidth + pageWidth
  );

  const physics = { damping: 15, mass: 0.2, stiffness: 90 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <HorizontalScrollContainer>
        <HorizontalScroll
          ref={scrollRef}
          style={{ x: spring }}
          onScroll={() => {
            console.log('scrolling');
          }}
          className="scroll-content-vertical"
        >
          {children}
        </HorizontalScroll>
      </HorizontalScrollContainer>

      <Content ref={contentRef} style={{ height: contentWidth }} />
    </>
  );
};

const VerticalScrollContainer = styled(motion.main, {
  position: 'fixed',
  top: 0,
  left: 0,

  width: '100%',
  height: 'fit-content',

  willChange: 'transform',
});

const HorizontalScrollContainer = styled('div', {
  position: 'fixed',
  left: 0,
  right: 0,

  willChange: 'transform',
});

const HorizontalScroll = styled(motion.main, {
  height: '100vh',
  width: 'max-content',

  // display: 'grid',
  // gridTemplateColumns: 'repeat(auto-fill, 4%)',
  // gridTemplateRows: 'repeat(auto-fill, 10%)',

  overflow: 'hidden',

  willChange: 'transform',
});

const Content = styled('div', {
  width: '100vw',
});

export { SmoothScrollVertical, SmoothScrollHorizontal };
