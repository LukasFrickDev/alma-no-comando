import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { TbCompass, TbHeartbeat, TbLayersIntersect, TbPresentationAnalytics } from 'react-icons/tb'
import { buildWhatsappUrl, depthPaths, depthPathsCta } from '../../../data/homeContent'
import { PrimaryButton } from '../../common/Buttons'
import { Wrapper, Container, Header, Kicker, Title, Paragraph, Grid, Card, CardTitle, CardText, Icon, Actions } from './styles'

const DepthPathsSection = () => {
  const iconMap: Record<string, ReactNode> = {
    Mentoria: <TbCompass />,
    'Clínica (terapia)': <TbHeartbeat />,
    'Vivências': <TbLayersIntersect />,
    'Palestras e Programas': <TbPresentationAnalytics />,
  }

  const descriptions: Record<string, ReactNode> = {
    Mentoria: (
      <>
        Acompanhamento para desenvolvimento de clareza, responsabilidade e direção nas <strong>escolhas pessoais e profissionais</strong>.
      </>
    ),
    'Clínica (terapia)': (
      <>
        Sessões individuais para aprofundar a <strong>escuta clínica</strong>, integrar mensagens da psique e sustentar movimentos de transformação.
      </>
    ),
    'Vivências': (
      <>
        Experiências conduzidas para ampliar a percepção, aprofundar a escuta e favorecer movimentos de <strong>integração</strong>.
      </>
    ),
    'Palestras e Programas': (
      <>
        Conteúdos e experiências voltados ao <strong>desenvolvimento humano</strong> em contextos organizacionais, grupos e ambientes de formação.
      </>
    ),
  }

  return (
    <Wrapper id="paths">
      <Container>
        <Header as={motion.div} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
          <Kicker>Caminhos de aprofundamento</Kicker>
          <Title>Formatos para caminhar mais fundo</Title>
          <Paragraph>
            O trabalho se desdobra em experiências sob medida para apoiar indivíduos, grupos e organizações em processos de reflexão, desenvolvimento e transformação.
          </Paragraph>
        </Header>

        <Grid>
          {depthPaths.map((path) => (
            <Card as={motion.article} key={path.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45 }}>
              <Icon aria-hidden="true">{iconMap[path.title] ?? <TbCompass />}</Icon>
              <CardTitle>{path.title}</CardTitle>
              <CardText>{descriptions[path.title] ?? path.description}</CardText>
            </Card>
          ))}
        </Grid>

        <Actions>
          <PrimaryButton as="a" href={buildWhatsappUrl(depthPathsCta.whatsappMessage)} target="_blank" rel="noreferrer">
            {depthPathsCta.label}
          </PrimaryButton>
        </Actions>
      </Container>
    </Wrapper>
  )
}

export default DepthPathsSection
