import { motion } from 'framer-motion'
import { pillars } from '../../../data/homeContent'
import { Wrapper, Container, Header, Kicker, Title, Grid, Card, PillarTitle, PillarText } from './styles'

const PillarsSection = () => {
  return (
    <Wrapper id="pillars">
      <Container>
        <Header as={motion.div} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
          <Kicker>Pilares</Kicker>
          <Title>Os 4 pilares do método</Title>
        </Header>

        <Grid>
          {pillars.map((pillar) => (
            <Card as={motion.article} key={pillar.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45 }}>
              <PillarTitle>{pillar.title}</PillarTitle>
              <PillarText>{pillar.description}</PillarText>
            </Card>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default PillarsSection
