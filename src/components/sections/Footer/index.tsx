import { navLinks } from '../../../data/homeContent'
import logoMain from '../../../assets/logo-1200x.png'
import { TbBrandInstagram, TbMail, TbPhone } from 'react-icons/tb'
import {
  Wrapper,
  Container,
  BrandBlock,
  BrandRow,
  BrandLogo,
  BrandTitle,
  BrandTagline,
  BrandQuickLinks,
  BrandQuickLink,
  NavArea,
  NavTitle,
  NavGrid,
  NavColumn,
  NavLink,
  ContactArea,
  ContactTitle,
  ContactList,
  ContactItem,
  ContactIcon,
  ContactLink,
  Rights,
  RightsText,
} from './styles'

const FooterSection = () => {
  const contactItems = [
    { label: 'contato@aalmanocomando.com.br', href: 'mailto:contato@aalmanocomando.com.br', icon: <TbMail /> },
    { label: '+55 11 97475-3581', href: 'tel:+5511974753581', icon: <TbPhone /> },
    { label: '@aalmanocomando', href: 'https://www.instagram.com/aalmanocomando', icon: <TbBrandInstagram /> },
  ]

  const quickLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/aalmanocomando', icon: <TbBrandInstagram /> },
    { label: 'E-mail', href: 'mailto:contato@aalmanocomando.com.br', icon: <TbMail /> },
  ]

  const navChunks = [navLinks.slice(0, 4), navLinks.slice(4, 8)]

  return (
    <Wrapper>
      <Container>
        <BrandBlock>
          <BrandRow>
            <BrandLogo src={logoMain} alt="A Alma no Comando" loading="lazy" />
            <div>
              <BrandTitle>A Alma no Comando</BrandTitle>
              <BrandTagline>Um convite à escuta da vida, ao amadurecimento interior e à reconexão com aquilo que orienta com mais verdade.</BrandTagline>
              <BrandQuickLinks>
                {quickLinks.map((item) => (
                  <BrandQuickLink key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noreferrer">
                    {item.icon}
                  </BrandQuickLink>
                ))}
              </BrandQuickLinks>
            </div>
          </BrandRow>
        </BrandBlock>

        <NavArea aria-label="Navegação de rodapé">
          <NavTitle>Navegação</NavTitle>
          <NavGrid>
            {navChunks.map((chunk, index) => (
              <NavColumn key={index}>
                {chunk.map((link) => (
                  <NavLink key={link.href} href={link.href}>
                    {link.label}
                  </NavLink>
                ))}
              </NavColumn>
            ))}
          </NavGrid>
        </NavArea>

        <ContactArea>
          <ContactTitle>Contato</ContactTitle>
          <ContactList>
            {contactItems.map((item) => (
              <ContactItem key={item.href}>
                <ContactIcon aria-hidden="true">{item.icon}</ContactIcon>
                <ContactLink href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                  {item.label}
                </ContactLink>
              </ContactItem>
            ))}
          </ContactList>
        </ContactArea>

        <Rights>
          <RightsText>© {new Date().getFullYear()} A Alma no Comando. Todos os direitos reservados.</RightsText>
        </Rights>
      </Container>
    </Wrapper>
  )
}

export default FooterSection
