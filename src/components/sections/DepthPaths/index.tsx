import { motion } from 'framer-motion'
import { depthPaths } from '../../../data/homeContent'
import { Wrapper, Container, Header, Kicker, Title, Paragraph, Grid, Card, CardTitle, CardText, Icon } from './styles'

const DepthPathsSection = () => {
  return (
    <Wrapper id="paths">
      <Container>
        <Header as={motion.div} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
          <Kicker>Caminhos de aprofundamento</Kicker>
          <Title>Formatos para caminhar mais fundo</Title>
          <Paragraph>
            O trabalho se desdobra em experiências sob medida para apoiar indivíduos, grupos e organizações em processos de reflexão, desenvolvimento e transformação.
          </Paragraph>
        </Header>

        <Grid>
          {depthPaths.map((path) => (
            <Card as={motion.article} key={path.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45 }}>
              <Icon />
              <CardTitle>{path.title}</CardTitle>
              <CardText>{path.description}</CardText>
            </Card>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default DepthPathsSection
