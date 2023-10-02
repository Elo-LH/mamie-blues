import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'caladea', Helvetica, sans-serif;
    }

    a {
      text-decoration: none;
    }
   
   body {
      margin: 0px;
      min-height: 100vh;
      width: 100%;
      font-size: 100%;
   }
   body > div > div {
    min-height: 90vh;
   }

// H1 TITLE
    h1 {font-size: 3em;}
    @media screen and (max-width: 64em) {
    h1 {
        font-size: 2.5em;
      }
    }
    @media screen and (max-width: 50em) {
    h1 {
        font-size: 1.5em;
      }
    }

// H2 TITLE
    h2 {font-size: 2em;}
    @media screen and (max-width: 64em) {
    h2 {
        font-size: 1.7em;
      }
    }
    @media screen and (max-width: 50em) {
    h2 {
        font-size: 1.3em;
      }
    }

// H3 TITLE
    h3 {font-size: 1.7em;}
    @media screen and (max-width: 64em) {
    h3 {
        font-size: 1.5em;
      }
    }
    @media screen and (max-width: 50em) {
    h3 {
        font-size: 1em;
      }
    }

// TEXT (P, LI)
    p, li {font-size: 1.5em;}
    @media screen and (max-width: 64em) {
    p, li {
        font-size: 1.5em;
      }
    }
    @media screen and (max-width: 50em) {
    p, li {
        font-size: 1em;
      }
    }

    // EMPHAZE
    em {color: ${colors.primary};
  font-size: 110% }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
