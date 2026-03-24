import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { breakpoints } from '../../styles/breakpoints'

export const PageWrapper = styled.main`
  min-height: 100vh;
  background: linear-gradient(140deg, ${colors.background} 0%, ${colors.backgroundSoft} 40%, ${colors.backgroundSection} 100%);
  padding: 4rem 1.25rem 5rem;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const Hero = styled.section`
  display: grid;
  gap: 1.5rem;
  padding: clamp(2rem, 4vw, 3rem);
  border: 1px solid ${colors.line};
  background: ${colors.overlay};
  border-radius: 28px;
  backdrop-filter: blur(8px);
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.35);

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: center;
  }
`

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Kicker = styled.span`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${colors.primaryLight};
`

export const HeroTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3.25rem);
  color: ${colors.text};
`

export const HeroSubtitle = styled.p`
  max-width: 640px;
  color: ${colors.textSoft};
  font-size: 1.05rem;
  line-height: 1.7;
`

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
`

export const PrimaryButton = styled.button`
  padding: 0.85rem 1.4rem;
  border-radius: 999px;
  background: linear-gradient(120deg, ${colors.primary} 0%, ${colors.primaryLight} 100%);
  color: ${colors.textDark};
  font-weight: 700;
  letter-spacing: 0.01em;
  transition: transform 180ms ease, box-shadow 180ms ease;
  box-shadow: 0 12px 35px rgba(217, 180, 91, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 45px rgba(217, 180, 91, 0.35);
  }
`

export const GhostButton = styled.button`
  padding: 0.85rem 1.1rem;
  border-radius: 999px;
  border: 1px solid ${colors.line};
  color: ${colors.text};
  background: rgba(255, 255, 255, 0.02);
  transition: border-color 160ms ease, color 160ms ease, transform 160ms ease;

  &:hover {
    color: ${colors.primary};
    border-color: ${colors.primaryLight};
    transform: translateY(-1px);
  }
`

export const HeroCard = styled.div`
  border-radius: 20px;
  background: linear-gradient(180deg, ${colors.surface} 0%, ${colors.surfaceAlt} 100%);
  padding: 1.5rem;
  border: 1px solid ${colors.line};
  color: ${colors.text};
  display: grid;
  gap: 0.6rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
`

export const HeroCardTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: ${colors.primaryGlow};
`

export const HeroCardText = styled.p`
  margin: 0;
  color: ${colors.textMuted};
`

export const Sections = styled.section`
  display: grid;
  gap: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${breakpoints.desktop}) {
    gap: 1.2rem;
  }
`

export const SectionCard = styled.article`
  border: 1px solid ${colors.line};
  background: ${colors.backgroundSection};
  border-radius: 18px;
  padding: 1.5rem;
  display: grid;
  gap: 0.75rem;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${colors.primaryLight};
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);
  }
`

export const SectionTitle = styled.h3`
  font-size: 1.15rem;
  color: ${colors.text};
`

export const SectionCopy = styled.p`
  color: ${colors.textMuted};
  line-height: 1.6;
`

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, ${colors.line}, transparent);
  margin: 0.5rem 0;
`
