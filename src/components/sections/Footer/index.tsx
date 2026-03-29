import { buildWhatsappUrl, contactInfo, navLinks } from '../../../data/homeContent'
import logoMain from '../../../assets/logo-1200x.png'
import { TbBrandInstagram, TbBrandWhatsapp, TbMail } from 'react-icons/tb'
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
  const whatsappUrl = buildWhatsappUrl(contactInfo.whatsappDefaultMessage)

  const contactItems = [
    { label: contactInfo.email, href: `mailto:${contactInfo.email}`, icon: <TbMail /> },
    { label: contactInfo.whatsappDisplay, href: whatsappUrl, icon: <TbBrandWhatsapp /> },
    { label: contactInfo.instagramHandle, href: contactInfo.instagramUrl, icon: <TbBrandInstagram /> },
  ]

  const quickLinks = [
    { label: 'Instagram', href: contactInfo.instagramUrl, icon: <TbBrandInstagram /> },
    { label: 'WhatsApp', href: whatsappUrl, icon: <TbBrandWhatsapp /> },
    { label: 'E-mail', href: `mailto:${contactInfo.email}`, icon: <TbMail /> },
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
