import { motion } from 'framer-motion'
import { problemSection } from '../../../data/homeContent'
import {
  Wrapper,
  Container,
  Header,
  Kicker,
  Title,
  Paragraph,
  TextGroup,
  Visual,
  VisualHeader,
  VisualTitle,
  VisualText,

  AccentBar,
  VisualFooter,
} from './styles'

const ProblemSection = () => {
  return (
    <Wrapper id={problemSection.id}>
      <Container>
        <Header as={motion.div} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}>
          <Kicker>Contexto</Kicker>
          <TextGroup>
            <Title>{problemSection.title}</Title>
            {problemSection.paragraphs.map((text) => (
              <Paragraph key={text}>{text}</Paragraph>
            ))}
          </TextGroup>
        </Header>

        <Visual as={motion.div} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}>

          <VisualHeader>
            <VisualTitle>Silêncio interior em tempos de excesso</VisualTitle>
          </VisualHeader>
          <VisualText>
            Um painel simbólico sobre como a velocidade e a hiperconectividade podem obscurecer o espaço interno. O método propõe recuperar esse lugar de escuta e direção.
          </VisualText>
          <VisualFooter>
            <AccentBar />
            <span>Escuta, pausa e presença como antídotos ao ruído.</span>
          </VisualFooter>
        </Visual>
      </Container>
    </Wrapper>
  )
}

export default ProblemSection
