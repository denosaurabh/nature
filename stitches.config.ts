import { createStitches, globalCss } from '@stitches/react';

const { css, styled, theme } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
      maghfirea: 'Maghfirea',
      neutral: 'Neutral Face',
      modernist: 'Sk-Modernist',
    },
    colors: {
      davysGrey: '#595959ff',
      grayWeb: '#7f7f7fff',
      quickSilver: '#a5a5a5ff',
      lightGray: '#ccccccff',
      cultured: '#f2f2f2ff',
    },
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
    fontFamily: '$inter',
    fontWeight: 400,

    backgroundColor: 'lightGray',

    width: '100%',
    height: 'fit-content',
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
});

export { css, styled, globalStyles, theme };
