import { motion } from 'framer-motion'
import { authorSection } from '../../../data/homeContent'
import { placeholderAuthor } from '../../../assets/placeholders'
import { Wrapper, Container, Header, Kicker, Title, Paragraph, PortraitCard, Portrait, PortraitImage, PortraitName, PortraitRole, PortraitNote } from './styles'

const AuthorSection = () => {
  return (
    <Wrapper id={authorSection.id}>
      <Container>
        <Header as={motion.div} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
          <Kicker>Autor</Kicker>
          <Title>{authorSection.title}</Title>
          {authorSection.paragraphs.map((text) => (
            <Paragraph key={text}>{text}</Paragraph>
          ))}
        </Header>

        <PortraitCard as={motion.div} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
          <Portrait>
            <PortraitImage src={placeholderAuthor} alt="Retrato de João Lago (placeholder)" loading="lazy" />
          </Portrait>
          <div>
            <PortraitName>João Lago</PortraitName>
            <PortraitRole>Autor e facilitador</PortraitRole>
          </div>
          <PortraitNote>
            Mais de vinte anos trabalhando com indivíduos, grupos e organizações para traduzir crises em caminhos de amadurecimento, com uma abordagem que une rigor, simbolismo e humanidade.
          </PortraitNote>
        </PortraitCard>
      </Container>
    </Wrapper>
  )
}

export default AuthorSection
