import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { breakpoints } from '../../../styles/breakpoints'

export const Wrapper = styled.section`
  padding: clamp(3.4rem, 6vw, 5.8rem) 0;
  background: ${colors.backgroundLightAlt};
  color: ${colors.textDark};
`

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: grid;
  gap: 1.8rem;
`

export const Header = styled.div`
  display: grid;
  gap: 0.65rem;
  max-width: 760px;

  @media (max-width: 520px) {
    gap: 0.55rem;
  }
`

export const Kicker = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${colors.primary};
  font-weight: 700;
  font-size: 0.9rem;
`

export const Title = styled.h2`
  font-size: clamp(2rem, 3.6vw, 2.5rem);
  color: ${colors.textDark};
  line-height: 1.1;
`

export const Grid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 520px) {
    gap: 0.85rem;
  }
`

export const Card = styled.article`
  background: #ffffff;
  border-radius: 16px;
  padding: 1.4rem;
  border: 1px solid rgba(26, 29, 43, 0.08);
  box-shadow: 0 18px 40px rgba(10, 18, 48, 0.08);
  display: grid;
  gap: 0.5rem;
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(217, 180, 91, 0.45);
    box-shadow: 0 22px 48px rgba(10, 18, 48, 0.12);
  }

  @media (max-width: 520px) {
    padding: 1.2rem;
  }
`

export const PillarTitle = styled.h3`
  margin: 0;
  color: ${colors.textDark};
  font-size: 1.15rem;
`

export const PillarText = styled.p`
  margin: 0;
  color: rgba(26, 29, 43, 0.85);
  line-height: 1.65;

  @media (max-width: 520px) {
    line-height: 1.55;
  }
`
