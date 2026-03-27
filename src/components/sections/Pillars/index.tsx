import { motion } from 'framer-motion'
import { pillars } from '../../../data/homeContent'
import { PrimaryButton } from '../../common/Buttons'
import { Wrapper, Container, Header, Kicker, Title, Grid, Card, PillarTitle, PillarText, CtaWrapper, DesktopCta, MobileCta } from './styles'
import type { JSX } from 'react'

const PillarsSection = () => {
  const handleScrollToPaths = () => {
    const target = document.getElementById('paths')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const pillarDescriptions: Record<string, JSX.Element> = {
    'A vida como símbolo': (
      <>
        <strong>Os acontecimentos da vida</strong> não são apenas fatos isolados. Eles também podem ser lidos como sinais de processos internos em curso.
      </>
    ),
    'O desequilíbrio como linguagem': (
      <>
        <strong>Crises, tensões e desconfortos</strong> podem carregar mensagens importantes sobre aquilo que precisa ser revisto, integrado ou transformado.
      </>
    ),
    'A individuação como caminho': (
      <>
        O amadurecimento humano exige escuta, consciência e coragem para se aproximar daquilo que é <strong>mais verdadeiro em si mesmo</strong>.
      </>
    ),
    'A escuta como prática': (
      <>
        Permitir que a alma volte a ocupar seu lugar de orientação exige <strong>presença, percepção e abertura</strong> para o sentido mais profundo da experiência.
      </>
    ),
  }

  return (
    <Wrapper id="pillars">
      <Container>
        <Header as={motion.div} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
          <Kicker>Pilares</Kicker>
          <Title>Os 4 pilares do método</Title>
        </Header>

        <Grid>
          {pillars.map((pillar) => (
            <Card
              as={motion.article}
              key={pillar.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <PillarTitle>{pillar.title}</PillarTitle>
              <PillarText>{pillarDescriptions[pillar.title] ?? pillar.description}</PillarText>
            </Card>
          ))}
        </Grid>

        <CtaWrapper>
          <DesktopCta>
            <PrimaryButton type="button" onClick={handleScrollToPaths}>
              Conhecer caminhos de aprofundamento
            </PrimaryButton>
          </DesktopCta>
          <MobileCta>
            <PrimaryButton type="button" onClick={handleScrollToPaths}>
              Conhecer caminhos
            </PrimaryButton>
          </MobileCta>
        </CtaWrapper>
      </Container>
    </Wrapper>
  )
}

export default PillarsSection
