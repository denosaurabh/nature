import { styled } from '@styled';
import { motion } from "framer-motion"

import Page from '@layouts/page'
import Container from '@layouts/container';

const Heading = styled(motion.h1, {
  fontFamily: '$neutral',
  fontWeight: 'lighter',
  fontSize: '50px',
})

const Home: React.FC = () => {
  return (
    <Page>
      <Container>
        <Heading animate={{fontSize: '100px' }}>Elo Nature!</Heading>
      </Container>
    </Page>
  )
}


export default Home;