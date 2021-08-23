import { styled } from '@styled';
import { AnimatedImageVertical } from '@components/image';

const IndexMidBox: React.FC = () => {
  return (
    <MidBox>
      <AnimatedImageVertical
        className="header-img"
        src="/assets/img/titanwater.png"
        alt="Saturn Moon Titan"
        width={600}
        height={600}
      />

      <TextBox>
        <s style={{ textDecorationThickness: '2rem' }}>
          Velit euismod nunc, neque, volutpat imperdiet adipiscing malesuada
          aliquam. Ut fames ultricies luctus ac. In leo luctus viverra
          malesuada. Sagittis vitae habitant nullam nisi at enim.
        </s>
        <p>
          Journey to distant planets and moons where we will explore how
          potential alien life may look like, nature and their hidden secrets.
        </p>
      </TextBox>
    </MidBox>
  );
};

export default IndexMidBox;

const MidBox = styled('div', {
  width: '100%',

  padding: '10rem 5rem',

  display: 'flex',
  justifyContent: 'center',

  gap: '10rem',

  '@tablet': {
    flexDirection: 'column',
  },

  '@laptop': {
    gap: '5rem',
  },
});

const TextBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '50rem',

  padding: '8rem 0',

  fontFamily: '$modernist',
  fontSize: '2.2rem',
  color: '#383838',

  gap: '10rem',

  '@mobile': {
    width: '40rem',
  },
});
