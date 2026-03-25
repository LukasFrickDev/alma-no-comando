import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { breakpoints } from '../../../styles/breakpoints'

export const Wrapper = styled.footer`
  padding: clamp(3.1rem, 4.8vw, 4.2rem) 0 1rem;
  background: linear-gradient(180deg, ${colors.background} 0%, ${colors.backgroundSoft} 50%, ${colors.backgroundSection} 100%);
  color: ${colors.text};
  border-top: 1px solid ${colors.line};
`

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: grid;
  gap: 1.6rem;
  grid-template-areas:
    'brand'
    'nav'
    'contact'
    'rights';

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1.15fr 0.9fr 0.95fr;
    grid-template-areas:
      'brand nav contact'
      'rights rights rights';
    gap: 1.8rem;
  }

  @media (max-width: 520px) {
    gap: 1.25rem;
  }
`

export const BrandBlock = styled.div`
  display: grid;
  gap: 0.6rem;
  grid-area: brand;

  @media (max-width: 520px) {
    gap: 0.45rem;
  }
`

export const BrandRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.9rem;
  align-items: start;
`

export const BrandLogo = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.42));

  @media (max-width: 520px) {
    width: 56px;
    height: 56px;
  }
`

export const BrandTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  letter-spacing: 0.02em;
  color: ${colors.primaryLight};
`

export const BrandTagline = styled.p`
  margin: 0.35rem 0 0;
  color: ${colors.textSoft};
  line-height: 1.6;
  max-width: 520px;
  font-size: 0.98rem;

  @media (max-width: 520px) {
    font-size: 0.95rem;
    line-height: 1.55;
  }
`

export const BrandQuickLinks = styled.div`
  display: flex;
  gap: 0.65rem;
  margin-top: 0.7rem;
`

export const BrandQuickLink = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(217, 180, 91, 0.32);
  color: ${colors.primaryLight};
  text-decoration: none;
  transition: transform 140ms ease, box-shadow 140ms ease, border-color 140ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${colors.primary};
    box-shadow: 0 10px 28px rgba(217, 180, 91, 0.28);
  }
`

export const NavArea = styled.nav`
  grid-area: nav;
  display: grid;
  gap: 0.65rem;
  align-content: start;
`

export const NavTitle = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.8rem;
  color: ${colors.primaryLight};
  font-weight: 700;
`

export const NavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 0.25rem;
  row-gap: 0.2rem;

  @media (max-width: 520px) {
    gap: 0.24rem;
  }
`

export const NavColumn = styled.div`
  display: grid;
  gap: 0.25rem;
`

export const NavLink = styled.a`
  color: ${colors.textSoft};
  text-decoration: none;
  transition: color 150ms ease;

  &:hover {
    color: ${colors.primaryLight};
  }
`

export const ContactArea = styled.div`
  grid-area: contact;
  display: grid;
  gap: 0.75rem;
  align-content: start;
`

export const ContactTitle = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.8rem;
  color: ${colors.primaryLight};
  font-weight: 700;
`

export const ContactList = styled.div`
  display: grid;
  gap: 0.5rem;
`

export const ContactItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.6rem;
  align-items: center;
  color: ${colors.textSoft};
  font-size: 0.98rem;
`

export const ContactIcon = styled.span`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(217, 180, 91, 0.28);
  color: ${colors.primaryLight};
  font-size: 1.15rem;
`

export const ContactLink = styled.a`
  color: ${colors.textSoft};
  text-decoration: none;
  transition: color 140ms ease;

  &:hover {
    color: ${colors.primaryLight};
  }
`

export const Rights = styled.div`
  grid-area: rights;
  display: grid;
  place-items: center;
  padding-top: 0.6rem;
`

export const RightsText = styled.span`
  color: ${colors.textMuted};
  font-size: 0.95rem;
  text-align: center;
`
