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
  gap: 1.6rem;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 0.95fr;
    align-items: center;
  }

  @media (max-width: 520px) {
    gap: 1.4rem;
  }
`

export const Header = styled.div`
  display: grid;
  gap: 0.7rem;
  max-width: 740px;

  @media (max-width: 520px) {
    gap: 0.6rem;
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
  line-height: 1.12;
  color: ${colors.textDark};
`

export const Paragraph = styled.p`
  color: rgba(26, 29, 43, 0.9);
  line-height: 1.75;
  font-size: 1.05rem;

  @media (max-width: 520px) {
    font-size: 1rem;
    line-height: 1.65;
  }
`

export const Actions = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  justify-content: center;
  margin-top: 0.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    grid-column: auto;
  }

  @media (max-width: 520px) {
    gap: 0.75rem;
    justify-content: center;
  }

  button,
  a {
    min-width: 230px;
    padding: 1.08rem 1.8rem;
    text-align: center;
  }

  .contact-cta {
    color: ${colors.textDark};

    &:hover {
      color: ${colors.textDark};
    }
  }

  .book-cta {
    background: rgba(26, 29, 43, 0.06);
    border-color: rgba(26, 29, 43, 0.12);
    color: ${colors.textDark};

    &:hover {
      color: ${colors.primary};
      border-color: ${colors.primary};
      background: rgba(217, 180, 91, 0.12);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
    }
  }
`

export const HighlightCard = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(120deg, rgba(217, 180, 91, 0.26), rgba(255, 255, 255, 0.9));
  border: 1px solid rgba(26, 29, 43, 0.1);
  border-radius: 18px;
  padding: 1.6rem;
  box-shadow: 0 18px 48px rgba(10, 18, 48, 0.08);
  overflow: hidden;

  @media (max-width: 520px) {
    padding: 1.35rem;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 12px;
    border-radius: 14px;
    border: 1px dashed rgba(26, 29, 43, 0.15);
  }
`

export const HighlightTitle = styled.h3`
  margin: 0 0 0.4rem;
  color: ${colors.textDark};

  @media (max-width: 520px) {
    font-size: 1.05rem;
  }
`

export const HighlightText = styled.p`
  margin: 0;
  color: rgba(26, 29, 43, 0.82);
  line-height: 1.65;

  strong {
    color: ${colors.textDark};
    font-weight: 700;
  }

  @media (max-width: 520px) {
    line-height: 1.55;
  }
`
