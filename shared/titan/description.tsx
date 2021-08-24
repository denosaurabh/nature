import { styled } from '@styled';

import ContentBox from '@components/contentBox';
import Text from '@components/text';

import Image from 'next/image';

const TitanDescription: React.FC = () => {
  return (
    <ContentBox
      css={{ padding: '4rem', gap: '4rem', marginRight: '20rem' }}
      flex
      alignBottom
    >
      <MainImage
        className="main-image"
        src="/assets/img/titanwater.webp"
        alt="Saturn Moon Titan"
        width={700}
        height={500}
        objectFit="cover"
        quality={100}
      />
      <Text css={{ width: '40rem' }}>
        <p>
          Titan is a very interesting moon to explore. The moon itself is named
          for the Titans of Greek mythology, which include Cronus (equated with
          the Roman god Saturn) and his 11 siblings. It is about 9.54 AU far
          from Sun, and only about 1% of heat compared to earth gets received by
          Titan. Scientists believe that the current conditions of Titan are
          very similar to those of early Earth but at a much lower temperature.
        </p>
        <br />
        <br />
        <p>Learn more about Titan &rarr;</p>
        <br />
      </Text>
    </ContentBox>
  );
};

export default TitanDescription;

const MainImage = styled(Image, {
  marginTop: '5rem',
});
