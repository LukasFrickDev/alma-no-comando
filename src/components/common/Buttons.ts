import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.95rem 1.55rem;
  border-radius: 999px;
  border: none;
  background: linear-gradient(120deg, ${colors.primary} 0%, ${colors.primaryLight} 100%);
  color: ${colors.textDark};
  font-weight: 700;
  letter-spacing: 0.01em;
  box-shadow: 0 18px 42px rgba(217, 180, 91, 0.25);
  transition: transform 180ms ease, box-shadow 180ms ease, filter 160ms ease;

  @media (max-width: 520px) {
    width: 100%;
    justify-content: center;
    font-size: 0.98rem;
    padding: 0.95rem 1.1rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 56px rgba(217, 180, 91, 0.35);
  }

  &:active {
    transform: translateY(0);
    filter: brightness(0.98);
  }

  &:focus-visible {
    outline: 2px solid ${colors.primaryGlow};
    outline-offset: 3px;
    box-shadow: 0 0 0 2px rgba(5, 8, 22, 0.6), 0 16px 48px rgba(217, 180, 91, 0.35);
  }
`

export const GhostButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.9rem 1.25rem;
  border-radius: 999px;
  border: 1px solid ${colors.line};
  background: rgba(255, 255, 255, 0.03);
  color: ${colors.text};
  font-weight: 600;
  transition: color 160ms ease, border-color 160ms ease, transform 160ms ease, background 160ms ease, box-shadow 160ms ease;

  @media (max-width: 520px) {
    width: 100%;
    justify-content: center;
    font-size: 0.96rem;
    padding: 0.9rem 1rem;
  }

  &:hover {
    color: ${colors.primary};
    border-color: ${colors.primaryLight};
    background: rgba(217, 180, 91, 0.06);
    transform: translateY(-1px);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
  }

  &:active {
    transform: translateY(0);
    background: rgba(217, 180, 91, 0.09);
  }

  &:focus-visible {
    outline: 2px solid ${colors.primaryGlow};
    outline-offset: 3px;
    border-color: ${colors.primaryLight};
  }
`
