import { styled } from '@styled';

const Container: React.FC = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;

const ContainerStyled = styled('div', {
  width: '100%',
  height: '100vh',
});
