import { motion } from 'framer-motion'
import { methodIntro } from '../../../data/homeContent'
import { PrimaryButton } from '../../common/Buttons'
import { Wrapper, Container, Header, Kicker, Title, Paragraph, Card, CardTitle, CardText, AccentLine, CtaWrapperDesktop } from './styles'

const MethodIntroSection = () => {
  const handleScrollToPaths = () => {
    const target = document.getElementById('paths')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Wrapper id={methodIntro.id}>
      <Container>
        <Header as={motion.div} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}>
          <Kicker>Método</Kicker>
          <Title>{methodIntro.title}</Title>
          {methodIntro.paragraphs.map((text) => (
            <Paragraph key={text}>{text}</Paragraph>
          ))}
        </Header>

        <Card as={motion.div} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <CardTitle>Uma visão que nasce da prática</CardTitle>
          <CardText>
            Um método que alia psicologia analítica, leitura simbólica e experiência prática com pessoas e organizações. O convite é observar as crises como linguagem, não apenas como ruído.
          </CardText>
          <AccentLine />
          <CardText>
            A proposta é construir uma vida guiada pela alma: menos velocidade automática, mais consciência do que realmente pede passagem.
          </CardText>
        </Card>
      </Container>
          <CtaWrapperDesktop>
            <PrimaryButton type="button" onClick={handleScrollToPaths}>
              Quero conhecer o método
            </PrimaryButton>
          </CtaWrapperDesktop>
    </Wrapper>
  )
}

export default MethodIntroSection
