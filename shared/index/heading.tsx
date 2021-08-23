import { styled } from '@styled';
import Heading from '@components/heading';

const IndexHeading: React.FC = () => {
  return (
    <Heading
      css={{
        marginTop: '5%',
        marginLeft: '10%',
      }}
    >
      Explore Nature, Alien Life and Environment on /
      <Span>far moons & planets</Span>
    </Heading>
  );
};

export default IndexHeading;

const Span = styled('span', {
  fontFamily: '$maghfirea',
  fontWeight: 'lighter',
  fontSize: '8rem',

  marginTop: '2rem',

  display: 'block',
});
