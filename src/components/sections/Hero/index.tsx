import { motion } from 'framer-motion'
import { heroContent } from '../../../data/homeContent'
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
  ActionsMobile,
  HeroContainer,
  HeroText,
  HeroWrapper,
  Kicker,
  Subtitle,
  Title,
  VisualPanel,
} from './styles'
import bookCover from '../../../assets/capa-livro.png'
    
const HeroSection = () => {
  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

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
            <PrimaryButton type="button" onClick={() => scrollToSection('book')}>
              {heroContent.primaryCta}
            </PrimaryButton>
            <GhostButton type="button" onClick={() => scrollToSection('method')}>
              {heroContent.secondaryCta}
            </GhostButton>
          </Actions>
        </HeroText>

        <VisualPanel>
          <BookMock as={motion.div} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <BookImage src={bookCover} alt="Capa do livro A Alma no Comando" loading="lazy" />
            <BookLabel>Obra autoral</BookLabel>
            <AccentBadge>
              <AccentTitle>Escuta profunda</AccentTitle>
              <AccentText>Um volume dedicado a quem deseja caminhar com mais presença.</AccentText>
            </AccentBadge>
          </BookMock>
        </VisualPanel>

        <ActionsMobile>
          <PrimaryButton type="button" onClick={() => scrollToSection('book')}>
            {heroContent.primaryCta}
          </PrimaryButton>
          <GhostButton type="button" onClick={() => scrollToSection('method')}>
            {heroContent.secondaryCta}
          </GhostButton>
        </ActionsMobile>
      </HeroContainer>
    </HeroWrapper>
  )
}

export default HeroSection
