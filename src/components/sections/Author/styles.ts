import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { breakpoints } from '../../../styles/breakpoints'

export const Wrapper = styled.section`
  padding: clamp(3.4rem, 6vw, 5.8rem) 0;
  background: linear-gradient(140deg, ${colors.background} 0%, ${colors.backgroundSoft} 60%, ${colors.backgroundSection} 100%);
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
    align-items: center;
  }

  @media (max-width: 520px) {
    gap: 1.6rem;
  }
`

export const Header = styled.div`
  display: grid;
  gap: 0.7rem;
  max-width: 720px;
`

export const Kicker = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${colors.primaryLight};
  font-weight: 700;
  font-size: 0.9rem;
`

export const Title = styled.h2`
  font-size: clamp(2rem, 3.5vw, 2.5rem);
  line-height: 1.15;
  color: ${colors.text};
`

export const Paragraph = styled.p`
  color: ${colors.textMuted};
  line-height: 1.75;
  font-size: 1.03rem;

  @media (max-width: 520px) {
    font-size: 1rem;
    line-height: 1.65;
  }
`

export const PortraitCard = styled.div`
  position: relative;
  justify-self: end;
  width: min(360px, 90vw);
  background: rgba(12, 16, 38, 0.7);
  border: 1px solid ${colors.line};
  border-radius: 18px;
  padding: 1.8rem;
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.4);
  display: grid;
  gap: 1rem;
  backdrop-filter: blur(6px);

  @media (max-width: 520px) {
    width: min(320px, 92vw);
    padding: 1.5rem;
  }
`

export const Portrait = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(217, 180, 91, 0.8), rgba(10, 18, 48, 0.9));
  border: 2px solid ${colors.primaryLight};
  box-shadow: 0 12px 30px rgba(217, 180, 91, 0.25);

  @media (max-width: 520px) {
    width: 104px;
    height: 104px;
  }
`

export const PortraitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  filter: saturate(0.96);
`

export const PortraitName = styled.h3`
  margin: 0;
  color: ${colors.text};
`

export const PortraitRole = styled.span`
  color: ${colors.textSoft};
`

export const PortraitNote = styled.p`
  margin: 0;
  color: ${colors.textSoft};
  line-height: 1.6;

  @media (max-width: 520px) {
    line-height: 1.55;
  }
`
