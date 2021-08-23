import { styled } from "@styled";

const NavBox = styled('div', {
  width: '100%',
  margin: '5% auto',

  display: 'flex',
  flexDirection: 'column',

  gap: '10rem',

  h3: {
    fontSize: '6rem',
    minWidth: 'max-content',
  },

  h6: {
    fontSize: '6rem',
    minWidth: 'max-content',
  },
});

export default NavBox;
