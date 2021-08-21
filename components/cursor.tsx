import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor: React.FC = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.y - 19);
      cursorY.set(e.x - 19);
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const springConfig = { damping: 100, stiffness: 1000 };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <motion.img
      alt="Cursor"
      src="/assets/img/cursor.svg"
      width={40}
      height={40}
      draggable={false}
      style={{
        position: 'fixed',

        top: cursorXSpring,
        left: cursorYSpring,

        userSelect: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default Cursor;
