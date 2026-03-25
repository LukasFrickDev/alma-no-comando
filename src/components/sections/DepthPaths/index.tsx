import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { TbCompass, TbLayersIntersect, TbPresentationAnalytics } from 'react-icons/tb'
import { depthPaths } from '../../../data/homeContent'
import { Wrapper, Container, Header, Kicker, Title, Paragraph, Grid, Card, CardTitle, CardText, Icon } from './styles'

const DepthPathsSection = () => {
  const iconMap: Record<string, ReactNode> = {
    Mentoria: <TbCompass />,
    'Vivências': <TbLayersIntersect />,
    'Palestras e Programas': <TbPresentationAnalytics />,
  }

  const descriptions: Record<string, ReactNode> = {
    Mentoria: (
      <>
        Acompanhamento mais próximo para processos de discernimento, amadurecimento e <strong>reposicionamento interior</strong>.
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
      </Container>
    </Wrapper>
  )
}

export default DepthPathsSection
