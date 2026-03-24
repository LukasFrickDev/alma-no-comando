import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { breakpoints } from '../../../styles/breakpoints'

export const Wrapper = styled.section`
  padding: clamp(3.4rem, 6vw, 5.8rem) 0;
  background: linear-gradient(180deg, ${colors.backgroundLight} 0%, #ffffff 60%, ${colors.backgroundLightAlt} 100%);
  color: ${colors.textDark};
`

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: grid;
  gap: 2rem;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
    gap: 2.5rem;
  }

  @media (max-width: 520px) {
    gap: 1.6rem;
  }
`

export const Header = styled.div`
  display: grid;
  gap: 0.65rem;
  max-width: 720px;
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
  line-height: 1.12;
  color: ${colors.textDark};
`

export const Paragraph = styled.p`
  color: rgba(26, 29, 43, 0.9);
  line-height: 1.75;
  font-size: 1.03rem;

  @media (max-width: 520px) {
    font-size: 1rem;
    line-height: 1.65;
  }
`

export const Visual = styled.div`
  position: relative;
  justify-self: end;
  width: min(400px, 88vw);
  aspect-ratio: 2 / 3;
  border-radius: 22px;
  background: linear-gradient(150deg, ${colors.surface} 0%, ${colors.surfaceAlt} 70%);
  border: 1px solid ${colors.line};
  box-shadow: 0 26px 86px rgba(0, 0, 0, 0.35), 0 0 70px rgba(217, 180, 91, 0.18);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 12%;
    border-radius: 16px;
    background: radial-gradient(circle at 30% 30%, rgba(217, 180, 91, 0.32), transparent 55%),
      radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.08), transparent 55%),
      linear-gradient(145deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0));
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.08), transparent 30%, transparent 70%, rgba(255, 255, 255, 0.1));
    mix-blend-mode: screen;
  }

  @media (max-width: 520px) {
    justify-self: center;
    width: min(340px, 88vw);
  }
`

export const CoverImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 22px;
  z-index: 1;
`

export const VisualBadge = styled.div`
  position: absolute;
  top: 1.4rem;
  right: -0.6rem;
  padding: 0.6rem 1rem;
  background: ${colors.primary};
  color: ${colors.textDark};
  border-radius: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  box-shadow: 0 12px 28px rgba(217, 180, 91, 0.35);
`

export const VisualNote = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: -0.6rem;
  padding: 0.85rem 1.15rem;
  background: rgba(244, 238, 223, 0.9);
  color: ${colors.textDark};
  border-radius: 14px;
  border: 1px solid rgba(26, 29, 43, 0.1);
  box-shadow: 0 12px 30px rgba(10, 18, 48, 0.12);
  width: 240px;
`
