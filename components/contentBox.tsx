import { styled } from '@styled';

const ContentBox = styled('div', {
  width: 'fit-content',
  margin: '0 5rem',

  variants: {
    flex: {
      true: {
        display: 'flex',
      },
    },
    flexColumn: {
      true: {
        flexDirection: 'column',
      },
    },

    alignBottom: {
      true: {
        alignItems: 'flex-end',
      },
    },

    justifyBottom: {
      true: {
        justifyContent: 'flex-end',
      },
    },

    center: {
      true: {
        display: 'flex',

        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
});

export default ContentBox;
