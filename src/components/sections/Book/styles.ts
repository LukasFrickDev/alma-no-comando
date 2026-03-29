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

  @media (min-width: ${breakpoints.tablet}) {
    order: 2;
    justify-self: start;
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

  @media (max-width: 520px) {
    padding-left: 0.6rem;
  }
`

export const Paragraph = styled.p`
  color: rgba(26, 29, 43, 0.9);
  line-height: 1.75;
  font-size: 1.03rem;
  margin-bottom: 2rem;

  @media (max-width: 520px) {
    font-size: 1rem;
    line-height: 1.65;
    padding-left: 0.6rem;
  }
`

export const DesktopCta = styled.div`
    margin: 0 auto;
  @media (max-width: 520px) {
    display: none;
  }
`

export const Visual = styled.div`
  position: relative;
  justify-self: end;
  width: min(400px, 88vw);
  aspect-ratio: 2 / 3;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid ${colors.primary};
  box-shadow: 0 18px 56px rgba(0, 0, 0, 0.28), 0 0 48px rgba(217, 180, 91, 0.12);
  overflow: hidden;

  @media (max-width: 520px) {
    justify-self: center;
    width: min(340px, 88vw);
  }
  
  @media (min-width: ${breakpoints.tablet}) {
    justify-self: start;
    order: 1;
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
  box-shadow: 0 12px 38px rgba(217, 180, 91, 0.35);
  z-index: 2;
`

export const MobileCta = styled.div`
  display: none;

  @media (max-width: 520px) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 0.4rem;

    button {
      width: min(420px, 100%);
    }
  }
`



export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(7, 10, 22, 0.7);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 0.9rem;
  overflow-y: auto;
  overscroll-behavior: contain;
  z-index: 50;
`

export const ModalContent = styled.div`
  position: relative;
  width: min(820px, 100%);
  background: linear-gradient(165deg, rgba(20, 24, 42, 0.98), rgba(14, 17, 32, 0.96));
  border: 1px solid rgba(217, 180, 91, 0.35);
  border-radius: 20px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.45), 0 0 80px rgba(217, 180, 91, 0.2);
  padding: clamp(1.4rem, 3vw, 2rem);
  margin: 1rem 0;
  max-height: calc(100vh - 2.5rem);
  overflow: auto;

  @media (max-width: 520px) {
    padding: 1.45rem 1.05rem 1.15rem;
    border-radius: 16px;
  }
`

export const ModalGrid = styled.div`
  display: grid;
  gap: 1.4rem;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 0.9fr 1.1fr;
    gap: 1.8rem;
    align-items: center;
  }
`

export const ModalImageWrapper = styled.div`
  background: ${colors.primary};
  border-radius: 16px;
  padding: 0.1rem;
  max-width: 380px;

  @media (max-width: 520px) {
    margin: 0 auto;
  }

`

export const ModalImage = styled.img`
  width: 100%;
  border-radius: 12px;
  display: block;

`

export const ModalBody = styled.div`
  display: grid;
  gap: 0.85rem;
  color: ${colors.text};

  @media (max-width: 520px) {
    gap: 0.75rem;
  }
`

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.4rem, 2.2vw, 1.65rem);
  color: ${colors.primaryLight};
`

export const ModalText = styled.p`
  margin: 0;
  line-height: 1.65;
  color: ${colors.textMuted};
`

export const ModalPrice = styled.div`
  font-weight: 700;
  color: ${colors.text};
  font-size: 1.08rem;
  margin-bottom: 2.5rem;

  @media (max-width: 520px) {
    margin-bottom: 0;
  }
`

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.6rem;
  border: none;
  background: rgba(8, 12, 26, 0.55);
  color: ${colors.text};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  transition: background 120ms ease, transform 120ms ease;
  z-index: 2;

  @media (max-width: 520px) {
    top: 0.35rem;
    right: 0.45rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-1px);
  }
`
