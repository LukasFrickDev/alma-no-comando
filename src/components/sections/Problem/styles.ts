import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { breakpoints } from '../../../styles/breakpoints'

export const Wrapper = styled.section`
  padding: clamp(3.25rem, 6vw, 5.75rem) 0;
  background: ${colors.backgroundLight};
  color: ${colors.textDark};
`

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: grid;
  gap: 2rem;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1.1fr 0.9fr;
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

export const Paragraph = styled.p`
  color: ${colors.textDark};
  opacity: 0.9;
  line-height: 1.8;
  font-size: 1.05rem;

  @media (max-width: 520px) {
    font-size: 1rem;
    line-height: 1.7;
  }
`

export const Visual = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(135deg, ${colors.backgroundLightAlt} 0%, #ffffff 40%, rgba(217, 180, 91, 0.12) 100%);
  border-radius: 22px;
  border: 1px solid rgba(26, 29, 43, 0.08);
  padding: 2.2rem;
  overflow: hidden;
  box-shadow: 0 28px 60px rgba(10, 18, 48, 0.08);

  &::after {
    content: '';
    position: absolute;
    inset: 16px;
    border-radius: 18px;
    border: 1px dashed rgba(26, 29, 43, 0.12);
  }

  @media (max-width: 520px) {
    padding: 1.6rem;
  }
`

export const VisualTitle = styled.h3`
  margin-bottom: 0.4rem;
  color: ${colors.textDark};

  @media (max-width: 520px) {
    font-size: 1.05rem;
  }
`

export const VisualText = styled.p`
  color: rgba(26, 29, 43, 0.78);
  line-height: 1.7;
  max-width: 480px;

  @media (max-width: 520px) {
    line-height: 1.6;
  }
`

export const AccentBar = styled.div`
  position: absolute;
  bottom: 1.6rem;
  right: 1.6rem;
  height: 46px;
  width: 160px;
  background: linear-gradient(120deg, rgba(217, 180, 91, 0.65), rgba(26, 29, 43, 0.9));
  border-radius: 999px;
  filter: blur(18px);
  opacity: 0.5;
`
