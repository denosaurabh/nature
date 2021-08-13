import React, {
  useState,
  useRef,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react';
import { useMotionValue, useSpring, motion } from 'framer-motion';
import ResizeObserver from 'resize-observer-polyfill';

const ScrollContainer: React.FC = ({ children }) => {
  const [window, setWindow] = useState(null);

  const [contentHeight, setContentHeight] = useState(0);
  const scrollContainerRef = useRef(null);
  const scrollYmotionValue = useMotionValue(
    -window?.pageYOffset || -window?.scrollY
  );
  const springPhysics = { stiffness: 28 };
  const scrollYtransition = useSpring(scrollYmotionValue, springPhysics);

  const getContentHeight = useCallback((entries) => {
    for (const entry of entries) {
      const entryHeight = entry.contentRect.height;
      setContentHeight(entryHeight);
    }
  }, []);

  useEffect(() => {
    if (!window) return;
    setWindow(window);
    setContentHeight(window.innerHeight);
  }, []);

  useLayoutEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const resizeObserver = new ResizeObserver((entries) =>
      getContentHeight(entries)
    );

    resizeObserver.observe(scrollContainer);

    return () => resizeObserver.disconnect();
  }, [getContentHeight]);

  useEffect(() => {
    if (!window) return;

    const trackScroll = () => {
      scrollYmotionValue.set(-window.pageYOffset || -window.scrollY);
    };

    window.addEventListener('scroll', trackScroll);

    return () => window.removeEventListener('scroll', trackScroll);
  }, [, window, scrollYmotionValue]);

  return (
    <>
      <motion.div
        ref={scrollContainerRef}
        style={{ y: scrollYtransition }}
        className="scroll-container"
      >
        {children}
      </motion.div>

      {/* <div style={{ height: contentHeight }} /> */}
    </>
  );
};

export default ScrollContainer;
