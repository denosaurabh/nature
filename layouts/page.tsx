import { styled } from '@styled';

const Page: React.FC = ({ children }) => {
  return (
    <PageStyled>
      {children}
    </PageStyled>
  );
};  


export default Page;

const PageStyled = styled('div', {
    width: '100%',
    height: '100%',
});
