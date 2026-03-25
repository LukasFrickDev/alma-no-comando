import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { breakpoints } from '../../../styles/breakpoints'

export const Wrapper = styled.section`
  padding: clamp(3.5rem, 6vw, 6rem) 0;
  background: linear-gradient(180deg, ${colors.backgroundSection} 0%, ${colors.background} 100%);
  color: ${colors.text};
`

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: grid;
  gap: 2rem;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1.05fr 0.95fr;
    align-items: start;
  }

  @media (max-width: 520px) {
    gap: 1.6rem;
  }
`

export const Header = styled.div`
  display: grid;
  gap: 0.8rem;
  max-width: 640px;
`

export const Kicker = styled.span`
  color: ${colors.primaryLight};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9rem;
`

export const Title = styled.h2`
  font-size: clamp(2rem, 3.5vw, 2.6rem);
  line-height: 1.15;
  color: ${colors.text};

  @media (max-width: 520px) {
    padding-left: 0.5rem;
  }
`

export const Paragraph = styled.p`
  color: ${colors.textMuted};
  line-height: 1.75;
  font-size: 1.05rem;

  @media (max-width: 520px) {
    font-size: 1rem;
    line-height: 1.65;
    padding-left: 0.5rem;
  }
`

export const Card = styled.div`
  background: rgba(15, 20, 44, 0.6);
  border: 1px solid ${colors.line};
  border-radius: 18px;
margin-top: 4rem;
  padding: 1.8rem;
  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.35);
  display: grid;
  gap: 0.85rem;
  backdrop-filter: blur(6px);

  @media (max-width: 520px) {
    padding: 1.4rem;
    margin-top: 0;
  }
`

export const CardTitle = styled.h3`
  color: ${colors.primaryLight};
  margin: 0;
  font-size: 1.15rem;
`

export const CardText = styled.p`
  color: ${colors.textSoft};
  margin: 0;
  line-height: 1.6;
`

export const AccentLine = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, ${colors.line}, transparent);
`
