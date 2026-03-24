import { motion } from 'framer-motion'
import { bookSection } from '../../../data/homeContent'
import { placeholderBookCover } from '../../../assets/placeholders'
import { PrimaryButton } from '../../common/Buttons'
import { Wrapper, Container, Header, Kicker, Title, Paragraph, Visual, VisualBadge, VisualNote, CoverImage } from './styles'

const BookSection = () => {
  return (
    <Wrapper id={bookSection.id}>
      <Container>
        <Header as={motion.div} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
          <Kicker>Obra</Kicker>
          <Title>{bookSection.title}</Title>
          {bookSection.paragraphs.map((text) => (
            <Paragraph key={text}>{text}</Paragraph>
          ))}
          <PrimaryButton type="button">{bookSection.cta}</PrimaryButton>
        </Header>

        <Visual as={motion.div} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
          <CoverImage src={placeholderBookCover} alt="Capa do livro A Alma no Comando (placeholder)" loading="lazy" />
          <VisualBadge>Edição especial</VisualBadge>
          <VisualNote>
            Uma capa pensada para ser guardada. Materiais premium, acabamento com brilho sutil e presença para a mesa ou estante.
          </VisualNote>
        </Visual>
      </Container>
    </Wrapper>
  )
}

export default BookSection
