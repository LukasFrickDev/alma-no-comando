import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { breakpoints } from '../../../styles/breakpoints'
import heroBackground from '../../../assets/background.png'

export const HeroWrapper = styled.section`
  position: relative;
  padding: clamp(1rem, 4vw, 1rem) 0 clamp(1rem, 4vw, 1rem);
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

  @media (max-width: 520px) {
    /* Mantém o glow dourado visível cobrindo toda a seção no mobile */
    background-size: cover;
    background-position: center top;
      padding: clamp(3.5rem, 7vw, 6.5rem) 0 clamp(3rem, 6vw, 5.5rem);
  }
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
    @media (max-width: 520px) {
    line-height: 1.1;
    text-align: center;
  }
`

export const Title = styled.h1`
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  line-height: 1.05;
  color: ${colors.text};

  @media (max-width: 520px) {
  font-size: clamp(3.0rem, 6vw, 4.0rem);
    line-height: 1.1;
    text-align: center;
  }
`

export const Subtitle = styled.p`
  font-size: 1.15rem;
  color: ${colors.textSoft};
  line-height: 1.7;

   @media (max-width: 520px) {
    font-size: 1.05rem;
    text-align: center;
  }
`

export const Body = styled.p`
  color: ${colors.text};
  line-height: 1.7;
  max-width: 720px;

  @media (max-width: 520px) {
    font-size: 0.98rem;
    line-height: 1.65;
    text-align: center;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;

  @media (max-width: 520px) {
    gap: 0.7rem;
    display: none;
  }
`

export const ActionsMobile = styled.div`
  display: none;

  @media (max-width: 520px) {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    width: 100%;
    justify-content: center;
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
  width: min(380px, 88vw);
  aspect-ratio: 2 / 3;
  border-radius: 18px;
  background: transparent;
  border: none;
  box-shadow: 0 24px 78px rgba(0, 0, 0, 0.42), 0 0 48px rgba(217, 180, 91, 0.18);
  overflow: hidden;
`

export const BookImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
  z-index: 1;
`

export const BookLabel = styled.div`
  position: absolute;
  top: 0.8rem;
  left: -0.75rem;
  padding: 0.4rem 1rem;
  background: ${colors.primary};
  color: rgba(8, 12, 26, 0.85);
  border-radius: 0px 20px 20px 0px;
  font-weight: 700;
  letter-spacing: 0.04em;
  border: 1px solid ${colors.backgroundSoft};
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.28);
  z-index: 2;
`

export const AccentBadge = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: -0.5rem;
  padding: 0.85rem 1.05rem;
  background: rgba(8, 12, 26, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-right: 12px solid rgba(217, 180, 91, 0.9);
  border-radius: 16px 0px 0px 16px;
  color: ${colors.text};
  width: 240px;
  box-shadow: 0 16px 42px rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(10px);
  z-index: 2;

  @media (max-width: 520px) {
    position: absolute;
    right: 0.35rem;
    bottom: 0.75rem;
    width: 78%;
    max-width: 220px;
    padding: 0.75rem 0.95rem;
    border-radius: 14px;
    border-right: 2px solid rgba(217, 180, 91, 0.85);
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
