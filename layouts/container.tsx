import { styled } from '@styled';

import VisibleGrid from '@components/visibleGrid';

const Container: React.FC = ({ children }) => {
  return (
    <ContainerStyled>
      <VisibleGrid />
      {children}
    </ContainerStyled>
  );
};

export default Container;

const ContainerStyled = styled('div', {
  width: '100%',
  height: '100vh',
});
