import { motion } from 'framer-motion'
import { problemSection } from '../../../data/homeContent'
import { Wrapper, Container, Header, Kicker, Title, Paragraph, Visual, VisualText, VisualTitle, AccentBar } from './styles'

const ProblemSection = () => {
  return (
    <Wrapper id={problemSection.id}>
      <Container>
        <Header as={motion.div} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}>
          <Kicker>Contexto</Kicker>
          <Title>{problemSection.title}</Title>
          {problemSection.paragraphs.map((text) => (
            <Paragraph key={text}>{text}</Paragraph>
          ))}
        </Header>

        <Visual as={motion.div} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <VisualTitle>Silêncio interior em tempos de excesso</VisualTitle>
          <VisualText>
            Um painel simbólico sobre como a velocidade e a hiperconectividade podem obscurecer o espaço interno. O método propõe recuperar esse lugar de escuta e direção.
          </VisualText>
          <AccentBar />
        </Visual>
      </Container>
    </Wrapper>
  )
}

export default ProblemSection
