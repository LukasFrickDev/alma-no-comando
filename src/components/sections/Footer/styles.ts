import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { breakpoints } from '../../../styles/breakpoints'

export const Wrapper = styled.footer`
  padding: clamp(2.9rem, 4.5vw, 3.9rem) 0;
  background: ${colors.background};
  color: ${colors.text};
  border-top: 1px solid ${colors.line};
`

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: grid;
  gap: 1.4rem;
  grid-template-areas:
    'brand'
    'nav'
    'contact'
    'rights';

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1.2fr 0.8fr 1fr;
    grid-template-areas:
      'brand nav contact'
      'rights rights rights';
  }

  @media (max-width: 520px) {
    gap: 1.1rem;
  }
`

export const BrandBlock = styled.div`
  display: grid;
  gap: 0.45rem;
  grid-area: brand;

  @media (max-width: 520px) {
    gap: 0.35rem;
  }
`

export const BrandRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
`

export const BrandLogo = styled.img`
  width: 52px;
  height: 52px;
  object-fit: contain;
  filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.38));

  @media (max-width: 520px) {
    width: 46px;
    height: 46px;
  }
`

export const Brand = styled.span`
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${colors.primaryLight};
`

export const Domain = styled.span`
  color: ${colors.text};
  opacity: 0.85;
  font-size: 0.95rem;
`

export const Nav = styled.nav`
  display: grid;
  gap: 0.45rem;
  grid-area: nav;
  align-content: start;

  @media (max-width: 520px) {
    gap: 0.35rem;
  }
`

export const NavLink = styled.a`
  color: ${colors.textSoft};
  text-decoration: none;
  transition: color 150ms ease;

  &:hover {
    color: ${colors.primary};
  }
`

export const Contact = styled.div`
  display: grid;
  gap: 0.4rem;
  color: ${colors.textSoft};
  grid-area: contact;
  align-content: start;
  font-size: 0.98rem;

  @media (max-width: 520px) {
    gap: 0.3rem;
  }
`

export const Rights = styled.div`
  grid-column: 1 / -1;
  grid-area: rights;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.textMuted};
  font-size: 0.95rem;
  margin-top: 0.6rem;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
