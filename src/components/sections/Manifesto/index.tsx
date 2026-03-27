import { motion } from 'framer-motion'
import { manifestoSection } from '../../../data/homeContent'
import { PrimaryButton, GhostButton } from '../../common/Buttons'
import { Wrapper, Container, Header, Kicker, Title, Paragraph, Actions, HighlightCard, HighlightTitle, HighlightText } from './styles'

const ManifestoSection = () => {
  const whatsappNumber = '5511974753581'
  const whatsappMessage = 'Olá, quero saber mais sobre os formatos e próximos passos.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const openBookModal = () => {
    window.dispatchEvent(new Event('openBookModal'))
  }

  return (
    <Wrapper id={manifestoSection.id}>
      <Container>
        <Header as={motion.div} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
          <Kicker>Manifesto</Kicker>
          <Title>{manifestoSection.title}</Title>
          {manifestoSection.paragraphs.map((text) => (
            <Paragraph key={text}>{text}</Paragraph>
          ))}
        </Header>

        <HighlightCard as={motion.div} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
          <HighlightTitle>Um convite à presença</HighlightTitle>
          <HighlightText>
            <strong>O silêncio interno</strong> não é ausência de movimento, é o espaço onde a direção aparece. Esta landing é apenas a porta de entrada para um percurso que continua no livro, nas vivências e no método.
          </HighlightText>
        </HighlightCard>
        <Actions>
          <PrimaryButton className="contact-cta" as="a" href={whatsappUrl} target="_blank" rel="noreferrer">
            Entrar em contato
          </PrimaryButton>
          <GhostButton className="book-cta" type="button" onClick={openBookModal}>
            Quero o livro
          </GhostButton>
        </Actions>
      </Container>
    </Wrapper>
  )
}

export default ManifestoSection
