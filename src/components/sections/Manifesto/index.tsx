import { motion } from 'framer-motion'
import { manifestoSection } from '../../../data/homeContent'
import { PrimaryButton, GhostButton } from '../../common/Buttons'
import { Wrapper, Container, Header, Kicker, Title, Paragraph, Actions, HighlightCard, HighlightTitle, HighlightText } from './styles'

const ManifestoSection = () => {
  return (
    <Wrapper id={manifestoSection.id}>
      <Container>
        <Header as={motion.div} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
          <Kicker>Manifesto</Kicker>
          <Title>{manifestoSection.title}</Title>
          {manifestoSection.paragraphs.map((text) => (
            <Paragraph key={text}>{text}</Paragraph>
          ))}
          <Actions>
            <PrimaryButton type="button">{manifestoSection.ctaPrimary}</PrimaryButton>
            <GhostButton type="button">{manifestoSection.ctaSecondary}</GhostButton>
          </Actions>
        </Header>

        <HighlightCard as={motion.div} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
          <HighlightTitle>Um convite à presença</HighlightTitle>
          <HighlightText>
            O silêncio interno não é ausência de movimento, é o espaço onde a direção aparece. Esta landing é apenas a porta de entrada para um percurso que continua no livro, nas vivências e no método.
          </HighlightText>
        </HighlightCard>
      </Container>
    </Wrapper>
  )
}

export default ManifestoSection
