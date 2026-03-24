import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { breakpoints } from '../../../styles/breakpoints'
import heroBackground from '../../../assets/background.png'

export const HeroWrapper = styled.section`
  position: relative;
  padding: clamp(3.5rem, 7vw, 6.5rem) 0 clamp(3rem, 6vw, 5.5rem);
  background:
    radial-gradient(circle at 20% 20%, rgba(217, 180, 91, 0.18), transparent 34%),
    radial-gradient(circle at 82% 22%, rgba(232, 201, 120, 0.14), transparent 32%),
    linear-gradient(140deg, rgba(5, 8, 22, 0.5) 0%, rgba(10, 18, 48, 0.12) 50%, rgba(16, 27, 71, 0.8) 100%),
    url(${heroBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${colors.text};
  overflow: hidden;
`

export const HeroContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: grid;
  gap: clamp(2rem, 4vw, 3rem);

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
  }

  @media (max-width: 520px) {
    gap: 1.6rem;
  }
`

export const HeroText = styled.div`
  display: grid;
  gap: 1.2rem;
  max-width: 640px;

  @media (max-width: 520px) {
    gap: 1rem;
  }
`

export const Kicker = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.9rem;
  color: ${colors.primaryLight};
`

export const Title = styled.h1`
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  line-height: 1.05;
  color: ${colors.text};

  @media (max-width: 520px) {
    line-height: 1.1;
  }
`

export const Subtitle = styled.p`
  font-size: 1.15rem;
  color: ${colors.textSoft};
  line-height: 1.7;

   @media (max-width: 520px) {
    font-size: 1.05rem;
  }
`

export const Body = styled.p`
  color: ${colors.textMuted};
  line-height: 1.7;
  max-width: 720px;

  @media (max-width: 520px) {
    font-size: 0.98rem;
    line-height: 1.65;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;

  @media (max-width: 520px) {
    gap: 0.7rem;
  }
`

export const VisualPanel = styled.div`
  position: relative;
  display: grid;
  gap: 1rem;
  justify-items: end;

  @media (max-width: 520px) {
    justify-items: center;
  }
`

export const BookMock = styled.div`
  position: relative;
  width: min(360px, 85vw);
  aspect-ratio: 2 / 3;
  border-radius: 20px;
  background: linear-gradient(160deg, ${colors.backgroundSection} 0%, ${colors.surface} 60%, ${colors.surfaceAlt} 100%);
  border: 1px solid ${colors.line};
  box-shadow: 0 22px 80px rgba(0, 0, 0, 0.45), 0 0 60px rgba(217, 180, 91, 0.15);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 10%;
    border-radius: 14px;
    background: radial-gradient(circle at 30% 30%, rgba(217, 180, 91, 0.32), transparent 50%),
      linear-gradient(145deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), transparent 25%, transparent 75%, rgba(255, 255, 255, 0.08));
    mix-blend-mode: screen;
  }
`

export const BookImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  z-index: 1;
`

export const BookLabel = styled.div`
  position: absolute;
  top: 1.25rem;
  left: -0.75rem;
  padding: 0.35rem 0.9rem;
  background: ${colors.primary};
  color: ${colors.textDark};
  border-radius: 999px;
  font-weight: 700;
  letter-spacing: 0.03em;
  box-shadow: 0 10px 24px rgba(217, 180, 91, 0.35);
`

export const AccentBadge = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: -0.5rem;
  padding: 0.8rem 1rem;
  background: rgba(10, 18, 48, 0.8);
  border: 1px solid ${colors.line};
  border-radius: 16px;
  color: ${colors.text};
  width: 220px;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);

  @media (max-width: 520px) {
    position: relative;
    right: auto;
    bottom: auto;
    width: 100%;
    margin-top: 1rem;
  }
`

export const AccentTitle = styled.span`
  display: block;
  font-weight: 700;
  color: ${colors.primaryLight};
  margin-bottom: 0.25rem;
`

export const AccentText = styled.span`
  display: block;
  color: ${colors.textMuted};
  line-height: 1.5;
`
