import { createStitches, globalCss } from '@stitches/react';

const { css, styled, theme } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
      maghfirea: 'Maghfirea',
      neutral: 'Neutral Face',
      modernist: 'Sk-Modernist',
    },
    fontSizes: {
      h1: '8rem',
      h2: '6rem',
    },
    colors: {
      davysGrey: '#595959ff',
      grayWeb: '#7f7f7fff',
      quickSilver: '#a5a5a5ff',
      lightGray: '#ccccccff',
      cultured: '#f2f2f2ff',
    },
  },
  media: {
    ['mobile-small']: '(max-width: 300px)',
    mobile: '(max-width: 480px)',
    tablet: '(max-width: 768px)',
    laptop: '(max-width: 1024px)',
    desktop: '(max-width: 1200px)',
    tv: '(min-width: 1201px)',
  },
  utils: {
    /* POSITIONING */
    t: (value) => ({
      top: value,
    }),
    b: (value) => ({
      bottom: value,
    }),
    l: (value) => ({
      left: value,
    }),
    r: (value) => ({
      right: value,
    }),
    /* SIZE */
    w: (value) => ({
      width: value,
    }),
    h: (value) => ({
      height: value,
    }),
    /* MARGIN */
    ml: (value) => ({
      marginLeft: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    m: (value) => ({
      margin: value,
    }),
  },
});

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'html, body, #__next': {
    minHeight: '100vh',

    fontSize: '62.5%',
    fontFamily: '$neutral',
    fontWeight: 400,

    backgroundColor: '$lightGray',

    width: '100%',
    height: 'fit-content',

    '@media (max-width: 1024px)': {
      fontSize: '58%',
    },

    '@media (max-width: 768px)': {
      fontSize: '54%',
    },

    '@media (max-width: 480px)': {
      fontSize: '48%',
    },

    '@media (max-width: 300px)': {
      fontSize: '42%',
    },
  },
  a: {
    color: 'inherit',
  },
  '@font-face': [
    {
      fontFamily: 'Maghfirea',
      src: `url('/assets/fonts/Maghfirea/MaghfireaRegular.woff2') format('woff2'),
          url('/assets/fonts/Maghfirea/MaghfireaRegular.woff') format('woff')`,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontDisplay: 'optional',
    },
    {
      fontFamily: 'Neutral Face',
      src: `url('/assets/fonts/NeutralFace/NeutralFaceRegular.woff2') format('woff2'),
          url('/assets/fonts/NeutralFace/NeutralFaceRegular.woff') format('woff')`,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontDisplay: 'optional',
    },
    {
      fontFamily: 'Sk-Modernist',
      src: `url('/assets/fonts/SkModernist/Sk-Modernist-Regular.woff2') format('woff2'),
          url('/assets/fonts/SkModernist/Sk-Modernist-Regular.woff') format('woff')`,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontDisplay: 'optional',
    },
  ],
  '::-webkit-scrollbar': {
    width: '10px',
  },
  '::-webkit-scrollbar-thumb': {
    background: '$davysGrey',
    borderRadius: '999px',
  },
  '::selection': {
    background: '$davysGrey',
    color: '$cultured',
  },
});

export { css, styled, globalStyles, theme };
