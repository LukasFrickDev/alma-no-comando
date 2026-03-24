import { motion } from 'framer-motion'
import { heroContent } from '../../../data/homeContent'
import { placeholderBookCover } from '../../../assets/placeholders'
import { PrimaryButton, GhostButton } from '../../common/Buttons'
import {
  AccentBadge,
  AccentText,
  AccentTitle,
  Actions,
  Body,
  BookLabel,
  BookMock,
  BookImage,
  HeroContainer,
  HeroText,
  HeroWrapper,
  Kicker,
  Subtitle,
  Title,
  VisualPanel,
} from './styles'

const HeroSection = () => {
  return (
    <HeroWrapper id="hero">
      <HeroContainer>
        <HeroText
          as={motion.div}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Kicker>{heroContent.kicker}</Kicker>
          <Title>{heroContent.title}</Title>
          <Subtitle>{heroContent.subtitle}</Subtitle>
          <Body>{heroContent.body}</Body>
          <Actions>
            <PrimaryButton type="button">{heroContent.primaryCta}</PrimaryButton>
            <GhostButton type="button">{heroContent.secondaryCta}</GhostButton>
          </Actions>
        </HeroText>

        <VisualPanel>
          <BookMock as={motion.div} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <BookImage src={placeholderBookCover} alt="Capa do livro A Alma no Comando (placeholder)" loading="lazy" />
            <BookLabel>Obra autoral</BookLabel>
            <AccentBadge>
              <AccentTitle>Escuta profunda</AccentTitle>
              <AccentText>Um volume dedicado a quem deseja caminhar com mais presença.</AccentText>
            </AccentBadge>
          </BookMock>
        </VisualPanel>
      </HeroContainer>
    </HeroWrapper>
  )
}

export default HeroSection
