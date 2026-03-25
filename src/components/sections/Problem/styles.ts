import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { breakpoints } from '../../../styles/breakpoints'

export const Wrapper = styled.section`
  padding: clamp(3.25rem, 6vw, 5.75rem) 0;
  background:
    radial-gradient(circle at 18% 12%, rgba(217, 180, 91, 0.08), transparent 32%),
    radial-gradient(circle at 82% 18%, rgba(26, 29, 43, 0.08), transparent 32%),
    linear-gradient(180deg, ${colors.backgroundLight} 0%, #ffffff 46%, ${colors.backgroundLightAlt} 100%);
  color: ${colors.textDark};
`

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: grid;
  gap: 2rem;
  grid-template-areas:
    'header'
    'visual';

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1.05fr 0.95fr;
    grid-template-areas: 'visual header';
    align-items: center;
    gap: 2.5rem;
  }

  @media (max-width: 520px) {
    gap: 1.6rem;
  }
`

export const Header = styled.div`
  display: grid;
  gap: 0.75rem;
  max-width: 640px;
  grid-area: header;

  @media (max-width: 520px) {
    gap: 0.65rem;
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
  font-size: clamp(2rem, 3.5vw, 2.6rem);
  color: ${colors.textDark};
  line-height: 1.1;
`

export const TextGroup = styled.div`
  display: grid;
  gap: 0.7rem;

  @media (max-width: 520px) {
    padding-left: 0.65rem;
  }
`

export const Paragraph = styled.p`
  color: ${colors.textDark};
  opacity: 0.9;
  line-height: 1.8;
  font-size: 1.05rem;
  max-width: 640px;
  margin-bottom: 0.2rem;

  @media (max-width: 520px) {
    font-size: 1rem;
    line-height: 1.7;
    max-width: 520px;
  }
`

export const Visual = styled.div`
  position: relative;
  width: 100%;
  grid-area: visual;
  background: linear-gradient(150deg, #f7f2e8 0%, rgba(247, 242, 232, 0.96) 48%, rgba(244, 238, 228, 0.94) 100%);
  border-radius: 28px;
  border: 1px solid rgba(217, 180, 91, 0.35);
  padding: 2.1rem 2rem 2rem;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12), 0 6px 18px rgba(217, 180, 91, 0.08);

  &::before {
    content: '';
    position: absolute;
    left: 1.35rem;
    top: 1.35rem;
    width: 3px;
    height: 78%;
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(217, 180, 91, 0.8), rgba(217, 180, 91, 0.35));
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 28px;
    border: 1px solid rgba(26, 29, 43, 0.06);
    background: radial-gradient(circle at 76% 82%, rgba(217, 180, 91, 0.12), transparent 42%),
      linear-gradient(110deg, rgba(255, 255, 255, 0.14), transparent 38%, transparent 70%, rgba(255, 255, 255, 0.08));
    mix-blend-mode: screen;
  }

  @media (max-width: 520px) {
    padding: 1.6rem 1.35rem 1.45rem 1.95rem;
    border-radius: 22px;

    &::before {
      left: 0.85rem;
      height: 80%;
    }
  }
`



export const VisualHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1.2rem;

  @media (max-width: 520px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

export const VisualTitle = styled.h3`
  margin: 0;
  color: #1f2a44;
  font-size: 1.4rem;
  line-height: 1.25;
  font-weight: 700;
  max-width: 520px;
  margin-bottom: 0.35rem;

  @media (max-width: 520px) {
    font-size: 1.2rem;
  }
`

export const VisualBadge = styled.span`
  position: absolute;
  top: 1.4rem;
  right: 1.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.38rem 0.78rem;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(217, 180, 91, 0.55);
  color: ${colors.textDark};
  border-radius: 999px;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 10px 22px rgba(10, 18, 48, 0.12);

  @media (max-width: 520px) {
    top: 1.2rem;
    right: 1.05rem;
  }
`

export const VisualText = styled.p`
  color: #344054;
  line-height: 1.72;
  max-width: 520px;
  font-size: 1.04rem;
  margin-bottom: 1.15rem;

  @media (max-width: 520px) {
    line-height: 1.64;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`

export const AccentBar = styled.div`
  position: absolute;
  bottom: 0.4rem;
  right: 0.4rem;
  height: 42px;
  width: 28%;
  background: linear-gradient(120deg, rgba(217, 180, 91, 0.45), rgba(26, 29, 43, 0.2));
  border-radius: 999px;
  filter: blur(14px);
  opacity: 0.7;
  transform: translate(18%, 42%);

  @media (max-width: 520px) {
    width: 44%;
    transform: translate(12%, 52%);
  }
`

export const VisualFooter = styled.div`
  margin-top: 1.35rem;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  font-size: 1rem;
  font-weight: 600;
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 1px;
    width: 46px;
    background: linear-gradient(90deg, rgba(217, 180, 91, 0.65), rgba(26, 29, 43, 0));
  }

  span {
    max-width: 360px;
    line-height: 1.6;
    color: ${colors.primary};
  }

  @media (max-width: 520px) {
    align-items: flex-start;
    gap: 0.7rem;

    span {
      font-size: 0.97rem;
      max-width: 100%;
    }
  }
`
