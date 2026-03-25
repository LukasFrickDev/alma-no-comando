import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'
import { bodyFont, headingFont } from './typography'

import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/cinzel/700.css'
import '@fontsource/cinzel/600.css'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    background-color: ${colors.background};
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.16) transparent;
  }

  body {
    min-height: 100vh;
    font-family: ${bodyFont};
    background-color: ${colors.background};
    color: ${colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  #root {
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${headingFont};
    color: ${colors.text};
    letter-spacing: 0.02em;
  }

  p, span, a, li {
    color: ${colors.textSoft};
  }

  a {
    text-decoration: none;
    transition: color 160ms ease;
  }

  a:hover {
    color: ${colors.primary};
  }

  button {
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    padding: 0;
  }

  ul, ol {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background-color: ${colors.primaryGlow};
    color: ${colors.textDark};
  }

  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.16);
    border-radius: 999px;
    border: 2px solid transparent;
    transition: background 120ms ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.38);
  }

  ::-webkit-scrollbar-thumb:active {
    background: rgba(255, 255, 255, 0.52);
  }
`

export default GlobalStyles
