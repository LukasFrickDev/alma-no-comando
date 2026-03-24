import { navLinks } from '../../../data/homeContent'
import logoMain from '../../../assets/logo-1200x.png'
import { Wrapper, Container, BrandBlock, BrandRow, BrandLogo, Brand, Domain, Nav, NavLink, Contact, Rights } from './styles'

const FooterSection = () => {
  return (
    <Wrapper>
      <Container>
        <BrandBlock>
          <BrandRow>
            <BrandLogo src={logoMain} alt="A Alma no Comando" loading="lazy" />
            <div>
              <Brand>A Alma no Comando</Brand>
              <Domain>aalmanocomando.com.br</Domain>
            </div>
          </BrandRow>
        </BrandBlock>

        <Nav aria-label="Navegação de rodapé">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </Nav>

        <Contact>
          <span>Contato e convites</span>
          <span>contato@aalmanocomando.com.br</span>
          <span>@aalmanocomando</span>
        </Contact>

        <Rights>
          <span>© {new Date().getFullYear()} A Alma no Comando. Todos os direitos reservados.</span>
          <span>João Lago</span>
        </Rights>
      </Container>
    </Wrapper>
  )
}

export default FooterSection
