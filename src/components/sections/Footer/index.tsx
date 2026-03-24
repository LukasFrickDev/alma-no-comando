import { navLinks } from '../../../data/homeContent'
import { Wrapper, Container, BrandBlock, Brand, Domain, Nav, NavLink, Contact, Rights } from './styles'

const FooterSection = () => {
  return (
    <Wrapper>
      <Container>
        <BrandBlock>
          <Brand>A Alma no Comando</Brand>
          <Domain>aalmanocomando.com.br</Domain>
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
