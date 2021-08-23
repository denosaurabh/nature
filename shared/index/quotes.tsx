import { useState } from 'react';
import { motion } from 'framer-motion';

import { styled } from '@styled';

import Text from '@components/text';
import Saturn from '@figures/saturn.svg';

const IndexQuotes: React.FC = () => {
  const [allQuotes, setAllQuotes] = useState({
    quotes: [
      {
        text: `I'm sure the universe is full of intelligent life. It's just been too
        intelligent to come here.`,
        by: 'Carl Sagan',
      },
      {
        text: `Two possibilities exist: Either we are alone in the Universe or we are not.
            Both are equally terrifying.`,
        by: 'Arthur C. Clarke',
      },
      {
        text: `If it is just us, seems like an awful waste of space.`,
        by: 'Carl Sagan',
      },
      {
        text: `In the deepest sense the search for extraterrestrial intelligence is a search for ourselves.`,
        by: 'Carl Sagan',
      },
    ],
    currentQuote: 0,
  });

  const onQuoteAnimationUpdate = (latest) => {
    if (latest.opacity === 0) {
      let nextQuoteNo = allQuotes.currentQuote + 1;

      if (nextQuoteNo === allQuotes.quotes.length) {
        nextQuoteNo = 0;
      }

      setAllQuotes({ ...allQuotes, currentQuote: nextQuoteNo });
    }
  };

  return (
    <>
      <SaturnSvg />

      <Quote
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          ease: 'anticipate',
          repeat: Infinity,
          repeatDelay: 2,
          repeatType: 'reverse',
        }}
        onUpdate={onQuoteAnimationUpdate}
      >
        &quot;{allQuotes.quotes[allQuotes.currentQuote].text}&quot;
        <Text css={{ textAlign: 'right', marginTop: '4rem', fontSize: '2rem' }}>
          ― {allQuotes.quotes[allQuotes.currentQuote].by}
        </Text>
      </Quote>
    </>
  );
};

export default IndexQuotes;

const Quote = styled(motion.h6, {
  margin: '0 auto',
  marginTop: '50rem',

  width: '80%',

  textAlign: 'center',
  alignSelf: 'center',

  fontFamily: '$modernist',
  fontWeight: 'lighter',
  fontSize: '4rem',
});

const SaturnSvg = styled(Saturn, {
  width: '60rem',
  height: '60rem',

  position: 'absolute',
  top: '70%',

  '@mobile': {
    top: '75%',

    width: '50rem',
    height: '50rem',
  },
});
