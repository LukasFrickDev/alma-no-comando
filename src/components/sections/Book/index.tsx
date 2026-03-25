import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { bookSection } from '../../../data/homeContent'
import { placeholderBookCover } from '../../../assets/placeholders'
import { PrimaryButton } from '../../common/Buttons'
import {
  Wrapper,
  Container,
  Header,
  Kicker,
  Title,
  Paragraph,
  Visual,
  VisualBadge,

  CoverImage,
  DesktopCta,
  MobileCta,
  ModalOverlay,
  ModalContent,
  ModalGrid,
  ModalImageWrapper,
  ModalImage,
  ModalBody,
  ModalTitle,
  ModalText,
  ModalPrice,
  ModalAction,
  ModalCloseButton,
} from './styles'

const BookSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const modalInfo = {
    title: 'A Alma no Comando',
    summary: bookSection.paragraphs[0],
    price: 'R$ 89,00',
    actionLabel: 'Ir para pagamento',
  }

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  useEffect(() => {
    const handleExternalOpen = () => setIsModalOpen(true)
    window.addEventListener('openBookModal', handleExternalOpen)
    return () => window.removeEventListener('openBookModal', handleExternalOpen)
  }, [])

  return (
    <Wrapper id={bookSection.id}>
      <Container>
        <Header as={motion.div} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
          <Kicker>Obra</Kicker>
          <Title>{bookSection.title}</Title>
          {bookSection.paragraphs.map((text) => (
            <Paragraph key={text}>{text}</Paragraph>
          ))}
          <DesktopCta>
            <PrimaryButton type="button" onClick={handleOpenModal}>
              {bookSection.cta}
            </PrimaryButton>
          </DesktopCta>
        </Header>

        <Visual as={motion.div} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
          <CoverImage src={placeholderBookCover} alt="Capa do livro A Alma no Comando (placeholder)" loading="lazy" />
          <VisualBadge>Edição especial</VisualBadge>

        </Visual>

        <MobileCta>
          <PrimaryButton type="button" onClick={handleOpenModal}>
            {bookSection.cta}
          </PrimaryButton>
        </MobileCta>
      </Container>

      {isModalOpen && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent role="dialog" aria-modal="true" aria-labelledby="book-modal-title" onClick={(event) => event.stopPropagation()}>
            <ModalCloseButton type="button" onClick={handleCloseModal} aria-label="Fechar modal">
              ×
            </ModalCloseButton>
            <ModalGrid>
              <ModalImageWrapper>
                <ModalImage src={placeholderBookCover} alt="Capa do livro A Alma no Comando" loading="lazy" />
              </ModalImageWrapper>
              <ModalBody>
                <ModalTitle id="book-modal-title">{modalInfo.title}</ModalTitle>
                <ModalText>{modalInfo.summary}</ModalText>
                <ModalPrice>{modalInfo.price}</ModalPrice>
                <ModalAction type="button">{modalInfo.actionLabel}</ModalAction>
              </ModalBody>
            </ModalGrid>
          </ModalContent>
        </ModalOverlay>
      )}
    </Wrapper>
  )
}

export default BookSection
