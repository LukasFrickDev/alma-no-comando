import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.95rem 1.55rem;
  border-radius: 999px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 55%, ${colors.primary} 100%);
  color: ${colors.textDark};
  font-weight: 700;
  letter-spacing: 0.01em;
  box-shadow:
    0 16px 36px rgba(217, 180, 91, 0.26),
    0 8px 20px rgba(0, 0, 0, 0.18);
  transition: transform 180ms ease, box-shadow 200ms ease, filter 160ms ease, background 200ms ease;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.06) 35%, rgba(255, 255, 255, 0) 60%);
    opacity: 0.9;
    pointer-events: none;
    mix-blend-mode: screen;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.32);
    pointer-events: none;
  }

  @media (max-width: 520px) {
    width: 100%;
    justify-content: center;
    font-size: 0.98rem;
    padding: 0.95rem 1.1rem;
  }

  &:hover {
    color: ${colors.textDark};
    transform: translateY(-2px);
    background: linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.primary} 60%, ${colors.primaryLight} 100%);
    box-shadow:
      0 20px 44px rgba(217, 180, 91, 0.32),
      0 10px 26px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    filter: brightness(0.97);
    box-shadow:
      inset 0 2px 6px rgba(0, 0, 0, 0.12),
      0 10px 22px rgba(217, 180, 91, 0.18);
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
  position: relative;
  border: 1px solid rgba(217, 180, 91, 0.38);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
  color: ${colors.text};
  font-weight: 600;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.16);
  transition: color 160ms ease, border-color 180ms ease, transform 160ms ease, background 180ms ease, box-shadow 180ms ease;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
    pointer-events: none;
  }

  @media (max-width: 520px) {
    width: 100%;
    justify-content: center;
    font-size: 0.96rem;
    padding: 0.9rem 1rem;
  }

  &:hover {
    color: ${colors.primary};
    border-color: rgba(217, 180, 91, 0.6);
    background: linear-gradient(135deg, rgba(217, 180, 91, 0.12), rgba(217, 180, 91, 0.05));
    transform: translateY(-1px);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.18);
  }

  &:active {
    transform: translateY(0);
    background: linear-gradient(135deg, rgba(217, 180, 91, 0.09), rgba(217, 180, 91, 0.04));
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  &:focus-visible {
    outline: 2px solid ${colors.primaryGlow};
    outline-offset: 3px;
    border-color: ${colors.primaryLight};
  }
`
