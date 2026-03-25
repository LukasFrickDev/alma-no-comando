import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { breakpoints } from '../../../styles/breakpoints'

export const Wrapper = styled.section`
  padding: clamp(3.4rem, 6vw, 5.8rem) 0;
  background: linear-gradient(160deg, ${colors.backgroundSection} 0%, ${colors.background} 100%);
  color: ${colors.text};
`

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: grid;
  gap: 1.6rem;
`

export const Header = styled.div`
  display: grid;
  gap: 0.6rem;
  max-width: 760px;

  @media (max-width: 520px) {
    gap: 0.5rem;
  }
`

export const Kicker = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${colors.primaryLight};
  font-weight: 700;
  font-size: 0.9rem;
`

export const Title = styled.h2`
  font-size: clamp(2rem, 3.5vw, 2.4rem);
  color: ${colors.text};
  line-height: 1.15;

  @media (max-width: 520px) {
    padding-left: 0.55rem;
  }
`

export const Paragraph = styled.p`
  color: ${colors.textMuted};
  line-height: 1.65;
  max-width: 720px;

  @media (max-width: 520px) {
    font-size: 0.98rem;
    line-height: 1.6;
    padding-left: 0.55rem;
  }
`

export const Grid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 520px) {
    gap: 0.85rem;
  }
`

export const Card = styled.article`
  background: rgba(12, 16, 38, 0.75);
  border: 1px solid ${colors.line};
  border-radius: 16px;
  padding: 1.4rem;
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.35);
  display: grid;
  gap: 0.6rem;
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${colors.primaryLight};
    box-shadow: 0 22px 56px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 520px) {
    padding: 1.2rem;
  }
`

export const Icon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(217, 180, 91, 0.42);
  box-shadow: 0 10px 24px rgba(217, 180, 91, 0.24);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primaryLight};
  font-size: 1.4rem;

  @media (max-width: 520px) {
    width: 36px;
    height: 36px;
    font-size: 1.2rem;
  }
`

export const CardTitle = styled.h3`
  color: ${colors.text};
  font-size: 1.1rem;
  margin: 0;
`

export const CardText = styled.p`
  color: ${colors.textSoft};
  margin: 0;
  line-height: 1.6;

  strong {
    color: ${colors.text};
    font-weight: 700;
  }

  @media (max-width: 520px) {
    line-height: 1.55;
  }
`
